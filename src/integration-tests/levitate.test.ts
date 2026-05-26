import path from 'path';
import { run } from '../utils/exec.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nodeBinary = process.execPath;
const levitateBinary = path.resolve(__dirname, '../../dist/bin.js');

// Stable env for snapshot tests: no colors, fixed terminal width.
const cliEnv = {
  FORCE_COLOR: '0',
  NO_COLOR: '1',
  COLUMNS: '120',
};

// Strip machine-specific paths and other volatile bits so snapshots are
// stable across checkouts and CI.
function normalize(s: string): string {
  return s
    .replace(/\r?\n$/, '')
    .replace(/file:\/\/[^\s)]+\/dist\//g, 'file://<REPO>/dist/')
    .replace(/file:\/\/[^\s)]+\/node_modules\//g, 'file://<REPO>/node_modules/')
    .replace(/:\d+:\d+(?=[)\s]|$)/g, ':<LINE>:<COL>');
}

async function invokeCli(args: string[], options: { cwd?: string } = {}) {
  try {
    const { stdout, stderr } = await run(nodeBinary, [levitateBinary, ...args], {
      cwd: options.cwd,
      env: cliEnv,
    });
    return {
      stdout: normalize(stdout),
      stderr: normalize(stderr),
      exitCode: 0,
    };
  } catch (e: any) {
    return {
      stdout: normalize(e.stdout ?? ''),
      stderr: normalize(e.stderr ?? ''),
      exitCode: typeof e.code === 'number' ? e.code : 1,
    };
  }
}

describe('Levitate', () => {
  describe('Shows help texts', () => {
    it('Shows a help text for the compare command', async () => {
      const { stdout } = await run(nodeBinary, [levitateBinary, 'compare', '--help']);
      expect(stdout).toContain('Compares the exports of packages');
    });

    it('Shows a help text for the is-compatible command', async () => {
      const { stdout } = await run(nodeBinary, [levitateBinary, 'is-compatible', '--help']);
      expect(stdout).toContain('Checks for incompatibilities between the passed path and modules');
    });

    it('Shows a help text for the list-exports command', async () => {
      const { stdout } = await run(nodeBinary, [levitateBinary, 'list-exports', '--help']);
      expect(stdout).toContain('Lists exported members of a TypeScript module');
    });

    it('Shows a help text for the list-imports command', async () => {
      const { stdout } = await run(nodeBinary, [levitateBinary, 'list-imports', '--help']);
      expect(stdout).toContain('Lists imports used by a TypeScript module.');
    });
  });

  describe('Base functionality works as expected', () => {
    it('Should not report changes between two identical packages', async () => {
      const { stdout } = await run(nodeBinary, [
        levitateBinary,
        'compare',
        '--prev',
        '@grafana/data@latest',
        '--current',
        '@grafana/data@latest',
      ]);
      expect(stdout).toContain('No breaking changes introduced');
    }, 60000); // a whole minute of timeout because this downloads packages
  });

  describe('Levignore works as expected', () => {
    const levignoreFixturePath = path.resolve(__dirname, '../../fixtures/levignore');
    it("Doesn't report changes that are ignored by levignore", async () => {
      const { stdout } = await run(
        nodeBinary,
        [levitateBinary, 'compare', '--prev', './package1', '--current', './package2'],
        {
          cwd: levignoreFixturePath,
        }
      );
      expect(stdout).toContain('No breaking changes introduced');
    });
  });

  describe('Comparison json output works as expected', () => {
    const comparisonJsonFixturePath = path.resolve(__dirname, '../../fixtures/compare');
    it('Outputs a JSON string representation of the compatibility report', async () => {
      let stdout: string;

      // this command will fail because compare will exit 1
      try {
        await run(
          nodeBinary,
          [levitateBinary, 'compare', '--prev', './bundle-old.ts', '--current', './bundle-new.ts', '--json'],
          {
            cwd: comparisonJsonFixturePath,
          }
        );
      } catch (e) {
        stdout = e.stdout;
      }
      const parsed = JSON.parse(stdout);
      expect(parsed).toBeTruthy();

      expect(Object.keys(parsed)).toEqual(['additions', 'removals', 'changes', 'hasBreakingChanges']);

      expect(parsed.hasBreakingChanges).toBe(true);
      expect(parsed.additions.map((a: any) => a.name)).toEqual([
        'getDataSourceUID',
        'StreamingFrameAction.Remove',
        'DataSourceRef.foo',
      ]);
      expect(parsed.removals.length).toBe(0);
      expect(parsed.changes.map((c: any) => c.name)).toEqual([
        'isDataSourceRef',
        'StreamingFrameAction',
        'StreamingFrameAction.Replace',
      ]);
    });
  });

  // Snapshot tests pin the current CLI surface (help text, error messages,
  // exit codes) so that future parser refactors surface any user-visible
  // change as a snapshot diff rather than a silent regression.
  describe('CLI surface (snapshots)', () => {
    describe('--help output', () => {
      it('top-level --help', async () => {
        const result = await invokeCli(['--help']);
        expect(result.exitCode).toBe(0);
        expect(result.stdout).toMatchSnapshot();
      });

      it('compare --help', async () => {
        const result = await invokeCli(['compare', '--help']);
        expect(result.exitCode).toBe(0);
        expect(result.stdout).toMatchSnapshot();
      });

      it('is-compatible --help', async () => {
        const result = await invokeCli(['is-compatible', '--help']);
        expect(result.exitCode).toBe(0);
        expect(result.stdout).toMatchSnapshot();
      });

      it('list-imports --help', async () => {
        const result = await invokeCli(['list-imports', '--help']);
        expect(result.exitCode).toBe(0);
        expect(result.stdout).toMatchSnapshot();
      });

      it('list-exports --help', async () => {
        const result = await invokeCli(['list-exports', '--help']);
        expect(result.exitCode).toBe(0);
        expect(result.stdout).toMatchSnapshot();
      });
    });

    describe('Missing required flags', () => {
      it('compare with no flags', async () => {
        const result = await invokeCli(['compare']);
        expect(result.exitCode).toBe(1);
        expect({ stdout: result.stdout, stderr: result.stderr }).toMatchSnapshot();
      });

      it('compare with only --prev', async () => {
        const result = await invokeCli(['compare', '--prev', '@grafana/data@latest']);
        expect(result.exitCode).toBe(1);
        expect({ stdout: result.stdout, stderr: result.stderr }).toMatchSnapshot();
      });

      it('is-compatible with no flags', async () => {
        const result = await invokeCli(['is-compatible']);
        expect(result.exitCode).toBe(1);
        expect({ stdout: result.stdout, stderr: result.stderr }).toMatchSnapshot();
      });

      it('list-imports with no flags', async () => {
        const result = await invokeCli(['list-imports']);
        // Surprising: current yargs config has `default: null` alongside `demandOption: true`,
        // so the handler runs with path=null and the CliError is caught and printed without
        // setting a non-zero exit. Snapshot captures this as-is to lock in present behavior.
        expect({ stdout: result.stdout, stderr: result.stderr, exitCode: result.exitCode }).toMatchSnapshot();
      });

      it('list-exports with no flags', async () => {
        const result = await invokeCli(['list-exports']);
        // list-exports tries to resolve the (undefined) path and throws inside the handler;
        // exit code reflects the unhandled-rejection path. Snapshotted as-is to lock in current behavior.
        expect({ stdout: result.stdout, stderr: result.stderr, exitCode: result.exitCode }).toMatchSnapshot();
      });
    });

    describe('Unknown command and bad input', () => {
      it('unknown subcommand', async () => {
        const result = await invokeCli(['bogus']);
        expect(result.exitCode).toBe(1);
        expect({ stdout: result.stdout, stderr: result.stderr }).toMatchSnapshot();
      });

      it('no arguments at all', async () => {
        const result = await invokeCli([]);
        expect({ stdout: result.stdout, stderr: result.stderr, exitCode: result.exitCode }).toMatchSnapshot();
      });
    });

    describe('list-imports flag handling', () => {
      // The `filters` option is `array: true` in yargs. Locks in how multiple
      // values, single value, and missing value are parsed.
      const importsFixture = path.resolve(__dirname, '../../fixtures/imports/package/src/module.ts');

      it('single --filters value', async () => {
        const result = await invokeCli(['list-imports', '--path', importsFixture, '--filters', '@grafana/ui']);
        expect(result.exitCode).toBe(0);
        expect(result.stdout).toMatchSnapshot();
      });

      it('multiple --filters values (space-separated)', async () => {
        const result = await invokeCli([
          'list-imports',
          '--path',
          importsFixture,
          '--filters',
          '@grafana/ui',
          '@grafana/data',
        ]);
        expect(result.exitCode).toBe(0);
        expect(result.stdout).toMatchSnapshot();
      });
    });
  });
});
