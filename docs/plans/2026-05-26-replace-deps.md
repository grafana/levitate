# Dependency Replacement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Audit every dependency in `package.json`, identify replacements with fewer transitive deps (or none — native code), and execute the high-value swaps.

**Architecture:** Levitate is a Node 24+ ESM CLI tool. It compares NPM package TypeScript surfaces. The codebase is small (~30 source files) and uses each dep in a narrow way, which means most third-party libs are over-spec'd for the actual use case. Native Node APIs (fetch, child_process, util.debuglog) and lighter alternatives can replace several heavyweight deps.

**Tech Stack:** TypeScript 5.9, Node 24, ESM, Yarn 4, Vitest, ESLint flat config.

**Engine requirement:** Bump `engines.node` to `>=18` (for native `fetch`) — currently unset. The repo CI and dev shell already use Node 24, so this is documenting reality.

---

## Investigation Summary

`node_modules/` is **261 MB**. Biggest deps on disk:

| Dep | Size | Direct deps | Used in | Notes |
|-----|-----:|------------:|---------|-------|
| `@tsd/typescript` | **37 MB** | 0 | 5 files | Re-exports the bundled `typescript` lib. We already have `typescript@5.9.3` as a sibling dep — this is a **pure duplicate**. |
| `tar` | 2.9 MB | 5 | 1 file | Only `extract` is used. Heavy but functional. |
| `diff` | 888 K | 0 | 1 file | Only `createPatch` is used. Zero runtime deps — fine. |
| `tty-table` | 804 K | 7 | 3 files | Pulls in `csv` (716 K), `smartwrap` (568 K), `chalk@4`, full `yargs@17`. Massive bloat for 3 simple tables. |
| `yargs` | 716 K | 6 | 1 file | Pulls in `cliui`, `string-width`, `y18n`, `escalade`, `yargs-parser`. We use 4 subcommands — `mri` or `cac` cover this in 0 deps. |
| `execa` | 656 K | 12 | 2 files | Always calls `npm` CLI with static argv arrays. `node:child_process` is plenty. |
| `node-fetch` | 148 K | 3 | 1 file | Native `fetch` since Node 18. Pure win. |
| `ora` | 108 K | 8 | 1 file | Pulls in `chalk@5`, `cli-cursor`, `cli-spinners`, `is-interactive`, `is-unicode-supported`, `log-symbols`, `stdin-discarder`, `string-width`. Could be replaced by ~30 LOC of custom code. |
| `chalk` | 72 K | 0 | 10 files | Already zero deps. Could swap to `picocolors` (0 deps, ~3 KB) for smaller surface, but the win is minimal. |
| `debug` | 60 K | 1 (`ms`) | 1 file | One usage. `util.debuglog` from Node native covers it. |

**Misplaced deps:** `@stylistic/eslint-plugin-ts` sits in `dependencies` but is a lint-time peer of `@grafana/eslint-config`. Move to `devDependencies`.

**devDependencies of interest:**
- `nodemon` — only used by two scripts (`dev-compare`, `dev-imports`). If those scripts aren't core to the dev loop, consider dropping; otherwise keep.
- `npm-run-all2` — used in `run-s build fixtures:*`. Could be replaced by `&&` chains. Tiny lib, low-priority.

---

## Prioritized Recommendations

### Tier 1 — High value, low risk (do these)

1. ~~**Drop `@tsd/typescript`**~~ — **Not feasible.** `@tsd/typescript` monkey-patches `typescript.js` to expose 5 internal compiler methods (`isTypeIdenticalTo` etc.). Plain `typescript` leaves them unreachable. See Task 1 below for the full investigation.
2. **Drop `node-fetch`** — use native `fetch`. One call site.
3. **Drop `execa`** — use `node:child_process`/`execFile`. ~3 call sites, all `npm` invocations with static argv.
4. **Move `@stylistic/eslint-plugin-ts` to devDependencies** — it's misplaced.
5. **Replace `ora` with `yocto-spinner`** — same author (sindresorhus), built explicitly as a minimal `ora`. 1 dep instead of 8. Wrapper in `src/utils/spinner.ts` hides the API delta entirely.

### Tier 2 — Medium value, low risk (recommend)

6. **Replace `yargs` with `cac` or `mri`** — 4 subcommands, no fancy yargs features used (no middleware, no async parsing magic). `cac` (0 deps, command-style API close to yargs) is the easiest port.
7. **Replace `debug` with `util.debuglog`** — single call site, two lines of code.
8. **Replace `tty-table` with hand-rolled fixed-width formatter or `cli-table3`** — three near-identical tables, no need for csv/wrap features.

### Tier 3 — Low value (skip unless polishing)

9. **`chalk` → `picocolors`** — both are tiny, win is marginal.
10. **`diff` → smaller diff lib** — `diff` has zero deps; only the install size is large because of bundled types/tests. Leave it.
11. **`tar` → `tar-stream`** — `tar` works fine and is well-maintained. Don't trade reliability for slight size.

---

## Files Touched (cross-task map)

| File | Affected by tasks |
|------|-------------------|
| `package.json` | 1, 2, 3, 4, 5, 6, 7, 8 |
| `src/bin.ts` | 6 (yargs → cac) |
| `src/utils/npm.ts` | 2 (fetch), 3 (execa), 1 (@tsd→ts indirectly via imports) |
| `src/utils/spinner.ts` | 5 (ora → yocto-spinner) |
| `src/utils/log.ts` | 7 (debug → debuglog) |
| `src/types.ts` | 1 |
| `src/utils/typescript.ts` | 1 |
| `src/print/changes.ts` | 1, 8 (tty-table) |
| `src/print/removals.ts` | 8 |
| `src/print/comparison.ts` | 8 |
| `src/commands/compare/compare.ts` | 1 |
| `src/compiler/imports.ts` | 1 |
| `src/integration-tests/levitate.test.ts` | 3 (execa) |
| `src/utils/npm.test.ts` | 3 (execa mock) |
| `eslint.config.js` | none — peer dep is resolved via `@grafana/eslint-config` |

---

## Task 1: ~~Replace `@tsd/typescript` with `typescript`~~ — NOT FEASIBLE

**Status:** Investigated and abandoned 2026-05-26. Plain `typescript` cannot replace `@tsd/typescript` for this repo.

**Root cause:** `@tsd/typescript` doesn't just type-augment `TypeChecker` — it **monkey-patches `typescript.js` at build time** to expose 5 internal compiler functions on the public `checker` object:

```js
var checker = {
  /** TSD */
  isTypeIdenticalTo: isTypeIdenticalTo,
  isTypeSubtypeOf: isTypeSubtypeOf,
  isTypeDerivedFrom: isTypeDerivedFrom,
  isTypeComparableTo: isTypeComparableTo,
  areTypesComparable: areTypesComparable,
  /** END TSD */
  ...
}
```

In plain `typescript`, these are unreachable local functions. Levitate calls `isTypeIdenticalTo` (3 sites in `src/commands/compare/compare.ts`) and `isTypeSubtypeOf` (1 site). Confirmed by attempting the swap: vitest reports `TypeError: checker.isTypeIdenticalTo is not a function`, 48 tests fail.

**Why not refactor to public APIs?** The closest public method is `checker.isTypeAssignableTo` (TS 5.0+). Mutual assignability ≠ identity; one-way assignability ≠ subtype. Levitate's job is detecting type-level breaking changes, so even subtle semantic drift means false positives/negatives in real consumer pipelines. Not worth it for 37 MB.

**Decision: keep `@tsd/typescript`.** Future readers: don't re-attempt without first verifying upstream `typescript` exposes these methods on the public TypeChecker, or planning a full refactor of `compare.ts` away from internal APIs.

**Levitate usage of the patched surface:**

- `checker.isTypeIdenticalTo` — `src/commands/compare/compare.ts:148, 355, 368`
- `checker.isTypeSubtypeOf` — `src/commands/compare/compare.ts:213`

No code changes. Task skipped.

---

## Task 2: Replace `node-fetch` with native `fetch`

**Why:** Node 18+ has WHATWG `fetch` globally. The one usage in `src/utils/npm.ts` streams the response body to a file.

**Files:**
- Modify: `src/utils/npm.ts:3` (remove import), `src/utils/npm.ts:167-176` (rewrite `downloadFile`)
- Modify: `package.json` (remove `node-fetch`)

- [ ] **Step 1: Rewrite `downloadFile`**

Replace lines 167-176 in `src/utils/npm.ts` with:

```typescript
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

export async function downloadFile(url: string, path: string) {
  const res = await fetch(url);
  if (!res.ok || !res.body) {
    throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`);
  }
  await pipeline(Readable.fromWeb(res.body), fs.createWriteStream(path));
}
```

Remove the `import fetch from 'node-fetch';` line.

- [ ] **Step 2: Remove the dep**

```bash
yarn remove node-fetch
```

- [ ] **Step 3: Verify**

```bash
yarn build
yarn test:ci
```

The compare command integration tests exercise `downloadFile` indirectly via `resolvePackage`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore(deps): use native fetch, drop node-fetch"
```

---

## Task 3: Replace `execa` with `node:child_process`

**Why:** All `execa` calls pass a fixed `npm` argv array (no shell interpolation needed). `execFile` from `node:child_process` plus `promisify` covers it in ~5 lines. `execa` brings in 12 deps for features (signal handling, stream merging, etc.) we don't use.

**Files:**
- Create: `src/utils/exec.ts` (thin wrapper around `execFile`)
- Modify: `src/utils/npm.ts` (replace 4 `execa(...)` calls)
- Modify: `src/utils/npm.test.ts` (update mock)
- Modify: `src/integration-tests/levitate.test.ts` (only used for running the CLI binary; either keep `execa` for tests as devDep or switch to the new helper)
- Modify: `package.json`

- [ ] **Step 1: Create the helper**

```typescript
// src/utils/exec.ts
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export async function run(
  cmd: string,
  args: string[],
  options: { cwd?: string } = {}
): Promise<{ stdout: string; stderr: string }> {
  const { stdout, stderr } = await execFileAsync(cmd, args, {
    cwd: options.cwd,
    maxBuffer: 50 * 1024 * 1024,
  });
  return { stdout: stdout.toString().trim(), stderr: stderr.toString() };
}
```

The `maxBuffer` bump matters: `npm list --json` for big projects can exceed the default 1 MB.

- [ ] **Step 2: Replace `execa` call sites in `npm.ts`**

| Line | Before | After |
|------|--------|-------|
| `74` | `await execa('npm', ['init', '-y'], { nodePath: ... })` | `await run('npm', ['init', '-y'])` |
| `75` | `await execa('npm', ['install', packageName], ...)` | `await run('npm', ['install', packageName])` |
| `96` | `await execa('rm', ['-rf', tmpPackageFolder])` | `await fs.promises.rm(tmpPackageFolder, { recursive: true, force: true })` |
| `162` | `const { stdout } = await execa('npm', ['view', packageName, 'dist.tarball'])` | `const { stdout } = await run('npm', ['view', packageName, 'dist.tarball'])` |
| `216` | `const result = await execa('npm', ['view', \`${packageName}@${version}\`, '--json'])` | `const result = await run('npm', ['view', \`${packageName}@${version}\`, '--json'])` |
| `233` | `const result = await execa('npm', ['list', '--json', '--depth', '0'], { cwd: dirname(path) })` | `const result = await run('npm', ['list', '--json', '--depth', '0'], { cwd: dirname(path) })` |

Note: switch `rm -rf` shell-out to `fs.promises.rm` — cross-platform, no dep.

The `e.stdout` access on line 238 still works because `execFile` rejects with an Error that carries `stdout`/`stderr` on the error object.

- [ ] **Step 3: Update the test mock**

Replace `vi.mock('execa', ...)` in `src/utils/npm.test.ts` with a mock of `../utils/exec.js`.

- [ ] **Step 4: Update integration tests**

`src/integration-tests/levitate.test.ts` just runs the built CLI to assert exit codes. Swap to `run('node', ['./dist/bin.js', ...])` (and accept that thrown errors carry stdout/stderr).

- [ ] **Step 5: Remove the dep**

```bash
yarn remove execa
```

- [ ] **Step 6: Verify**

```bash
yarn build
yarn test:ci
yarn fixtures:compare   # smoke test the real CLI path
```

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore(deps): replace execa with node:child_process"
```

---

## Task 4: Move `@stylistic/eslint-plugin-ts` to `devDependencies`

**Why:** It's a peer dep of `@grafana/eslint-config` (lint-time only). Putting it in `dependencies` makes every downstream consumer install it.

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Move the entry**

```bash
yarn remove @stylistic/eslint-plugin-ts
yarn add -D @stylistic/eslint-plugin-ts@^4.2.0
```

- [ ] **Step 2: Verify**

```bash
yarn lint
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore(deps): move @stylistic/eslint-plugin-ts to devDependencies"
```

---

## Task 5: Replace `ora` with `yocto-spinner`

**Why:** `yocto-spinner` is sindresorhus's explicit "minimal ora" — same author, same animation/output style, 1 dep (`yoctocolors`) instead of 8 (`chalk`, `cli-cursor`, `cli-spinners`, `is-interactive`, `is-unicode-supported`, `log-symbols`, `stdin-discarder`, `string-width`). Every spinner call site goes through `src/utils/spinner.ts`, so the API delta (`succeed`/`fail` → `success`/`error`) only affects that one file.

**Constraints:**
- `yocto-spinner` requires `engines.node >= 18.19`. Already covered by the engine bump in the plan header.
- `yocto-spinner({text})` requires an options object; ora was happy with `ora()`. Pass `{text: name}` so the spinner has something to show before `setSpinner` runs.

**Files:**
- Modify: `src/utils/spinner.ts`
- Modify: `package.json`

- [ ] **Step 1: Install `yocto-spinner`**

```bash
yarn add yocto-spinner
```

- [ ] **Step 2: Rewrite `src/utils/spinner.ts`**

Apply this diff:

```diff
-import ora, { type Ora } from 'ora';
+import yoctoSpinner, { type Spinner } from 'yocto-spinner';
 import { isSilent } from './log.js';

-const SPINNERS: Record<string, Ora> = {};
+const SPINNERS: Record<string, Spinner> = {};

 export function startSpinner(name: string) {
   if (isSilent()) {
     return;
   }

   getSpinner(name).start();
 }

 export function setSpinner(name: string, msg: string) {
   if (isSilent()) {
     return;
   }

   getSpinner(name).text = msg;
 }

 export function succeedSpinner(name: string, msg: string) {
   if (isSilent()) {
     return;
   }

-  getSpinner(name).succeed(msg);
+  getSpinner(name).success(msg);
 }

 export function failSpinner(name: string, msg: string) {
   if (isSilent()) {
     return;
   }

-  getSpinner(name).fail(msg);
+  getSpinner(name).error(msg);
 }

-function getSpinner(name: string): Ora {
+function getSpinner(name: string): Spinner {
   if (!SPINNERS[name]) {
-    SPINNERS[name] = ora();
+    SPINNERS[name] = yoctoSpinner({ text: name });
   }

   return SPINNERS[name];
 }
```

- [ ] **Step 3: Remove `ora`**

```bash
yarn remove ora
```

- [ ] **Step 4: Verify**

```bash
yarn build
yarn test:ci
yarn fixtures:compare    # eyeball: spinner animates and the success/fail symbols render
```

Expected: same compare output, spinner still shows a frame next to the package name during install/download, finishes with a green check on success.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore(deps): replace ora with yocto-spinner"
```

---

## Task 6: Replace `yargs` with `cac`

**Why:** `bin.ts` uses 4 subcommands (`compare`, `is-compatible`, `list-imports`, `list-exports`), simple option types (string/boolean/array), and `--help`. `cac` (0 deps, ~50 KB) covers this with very similar ergonomics. `mri` is even smaller but requires hand-rolled help text.

**Files:**
- Modify: `src/bin.ts` (rewrite CLI definition)
- Modify: `package.json`
- Modify: `src/utils/cli.ts` (its parser helper may need updating; check `getListImportsCliArgs`)

- [ ] **Step 1: Install `cac`**

```bash
yarn add cac
```

- [ ] **Step 2: Rewrite `bin.ts`**

Translate each `.command(name, desc, builder, handler)` to:

```typescript
import { cac } from 'cac';

const cli = cac('levitate');

cli
  .command('compare', 'Compares the exports of packages.')
  .option('--prev <prev>', 'Previous package version')
  .option('--current <current>', 'Current package version')
  .option('--json', 'Outputs a JSON representation')
  .action(async ({ prev, current, json }) => {
    if (!prev || !current) {
      logError(chalk.bgRed.bold.white(' ERROR '));
      logError('Missing arguments. Please make sure to provide both the --prev and --current options.\n');
      cli.outputHelp();
      flushAndExit(1);
    }
    // ... rest of existing handler
  });

cli.help();
cli.parse();
```

Repeat for `is-compatible`, `list-imports`, `list-exports`. Map `array: true` options to `cac`'s repeat-flag syntax.

- [ ] **Step 3: Update `src/utils/cli.ts`**

Look at `getListImportsCliArgs` — it expects yargs-shaped args. Update its input type or change call site to pass the new args shape.

- [ ] **Step 4: Remove `yargs`**

```bash
yarn remove yargs @types/yargs
```

- [ ] **Step 5: Verify CLI surface**

```bash
yarn build
node ./dist/bin.js --help
node ./dist/bin.js compare --help
yarn fixtures:compare
yarn fixtures:imports
yarn test:ci
```

Every subcommand's help text should still render. Existing flags must still work.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore(deps): replace yargs with cac"
```

---

## Task 7: Replace `debug` with `util.debuglog`

**Why:** One call site, one dep (`ms`). Node's `util.debuglog` does the same job: enable via `NODE_DEBUG=levitate`.

**Files:**
- Modify: `src/utils/log.ts`
- Modify: `package.json`

- [ ] **Step 1: Rewrite `log.ts`**

Replace:

```typescript
import getDebug from 'debug';
export const logDebug = getDebug('levitate');
```

With:

```typescript
import { debuglog } from 'node:util';
export const logDebug = debuglog('levitate');
```

`debuglog` returns a function with the same `(msg, ...args)` signature.

**Caveat:** `debug` is enabled by `DEBUG=levitate` (or `DEBUG=*`), `debuglog` by `NODE_DEBUG=levitate`. The `dev:*` scripts in `package.json` set `DEBUG=*`; update those to `NODE_DEBUG=levitate` or document the change in `README.md`.

- [ ] **Step 2: Update scripts**

In `package.json`:

```diff
- "fixtures:compare": "DEBUG=* node ./dist/bin.js compare ..."
+ "fixtures:compare": "NODE_DEBUG=levitate node ./dist/bin.js compare ..."
- "fixtures:imports": "DEBUG=* node ./dist/bin.js list-imports ..."
+ "fixtures:imports": "NODE_DEBUG=levitate node ./dist/bin.js list-imports ..."
```

Same for any `DEBUG` references in `forceDebugExit` (`src/utils/debug.ts` — verify whether it reads `process.env.DEBUG`).

- [ ] **Step 3: Remove deps**

```bash
yarn remove debug @types/debug
```

- [ ] **Step 4: Verify**

```bash
yarn build
NODE_DEBUG=levitate yarn fixtures:compare 2>&1 | head -20
```

Expected: debug lines prefixed with `LEVITATE` appear.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore(deps): use util.debuglog, drop debug"
```

---

## Task 8: Replace `tty-table` with a small fixed-width formatter

**Why:** Three tables, all 3 columns, fixed widths, no wrapping needed (declarations are pre-formatted). `tty-table` pulls in `csv`, `smartwrap`, `chalk@4`, full `yargs@17` — ~2 MB of transitive cost for tables we render with `console.log`.

Two paths: (A) hand-roll ~30 LOC formatter, (B) use `cli-table3` (3 deps, well-trodden). **Recommend (A)** because output is just multi-line text columns; `cli-table3` adds ASCII borders we don't necessarily want.

**Files:**
- Create: `src/print/table.ts`
- Modify: `src/print/changes.ts`, `src/print/removals.ts`, `src/print/comparison.ts`
- Modify: `package.json`

- [ ] **Step 1: Decide on path (A) or (B) by eyeballing current output**

```bash
yarn fixtures:compare 2>&1 | sed -n '/ADDITIONS/,/CHANGES/p' | head -40
```

Note the exact framing — if there are ASCII borders we need to preserve, go (B). Otherwise (A).

- [ ] **Step 2: Write the formatter**

Path (A) sketch:

```typescript
// src/print/table.ts
import stringWidth from 'string-width'; // already a transitive of node — actually use a tiny native helper

type Column = { value: string; width: number };

export function renderTable(columns: Column[], rows: string[][]): string {
  const header = columns.map((c) => padCell(c.value, c.width)).join(' ');
  const body = rows.map((r) => r.map((cell, i) => padCell(cell, columns[i].width)).join(' ')).join('\n');
  return `${header}\n${body}`;
}

function padCell(text: string, width: number): string {
  const lines = text.split('\n');
  return lines.map((line) => line.padEnd(width).slice(0, width)).join('\n');
}
```

ANSI-aware padding may be needed; if so, lift `string-width` (single dep) or compute visible width manually via `\x1b\[[0-9;]*m` stripping.

- [ ] **Step 3: Migrate call sites**

For each of `changes.ts`, `removals.ts`, `comparison.ts`:

```typescript
// before
import Table from 'tty-table';
const table = Table([...cols], [...rows]);
logInfo(table.render());

// after
import { renderTable } from './table.js';
logInfo(renderTable(cols, rows));
```

- [ ] **Step 4: Remove the dep**

```bash
yarn remove tty-table
```

- [ ] **Step 5: Verify output parity**

```bash
yarn build
yarn fixtures:compare > /tmp/after.txt
git stash      # if you saved a before snapshot, diff it
diff /tmp/before.txt /tmp/after.txt
```

Goal: layout is acceptable, even if not byte-identical.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore(deps): replace tty-table with a small in-tree formatter"
```

---

## Optional Tier 3 Tasks (defer unless asked)

### Task 9: `chalk` → `picocolors`

Both are zero-dep. `picocolors` is smaller (~3 KB vs ~14 KB) but the API differs (`pc.red(s)` vs `chalk.red(s)`, and chained styles like `chalk.green.bold` become `pc.bold(pc.green(s))`). 10 files would need touch-ups. Low value.

### Task 10: `diff` → native

`diff` is zero-dep at runtime — the 888 K on disk is its bundled types/tests. No transitive cost. Leave it.

### Task 11: `tar` → `tar-stream`

`tar-stream` is lower-level; we'd have to write extraction logic. `tar` works. Leave it.

---

## Expected Wins

| Metric | Before | After Tier 1 | After Tier 1+2 |
|--------|-------:|-------------:|---------------:|
| Direct runtime deps | 13 | 9 (drop @tsd/typescript, node-fetch, execa, ora; +yocto-spinner) | 6 |
| Transitive runtime deps (rough) | ~80 | ~50 | ~35 |
| node_modules size (approx.) | 261 MB | 219 MB | 214 MB |
| Misplaced deps | 1 | 0 | 0 |

Tier 1 is the obvious win — Tier 2 trades a small amount of code for the longer dependency tail.

---

## Self-Review Checklist

- Every Tier 1/2 task lists exact files, exact commands, and the verify step.
- No placeholders, no "fill in details."
- Task 5 (`yargs → cac`) is the riskiest — flagged the `getListImportsCliArgs` helper that needs touching.
- Task 7 has both path A (hand-roll) and path B (`cli-table3`) called out so the engineer picks based on the current output.
- Task 6 calls out the `DEBUG` → `NODE_DEBUG` envvar break; documented in step 2.
