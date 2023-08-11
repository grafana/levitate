# 🔮 Levitate

[![npm version][npm-badge]][npm-url]
[![npm downloads][downloads-badge]][npm-url]
[![CI][build-badge]][build-url]
[![prettier][prettier-badge]][prettier-url]
[![TypeScript][typescript-badge]][typescript-url]

A tool for helping to understand APIs exported and consumed by NPM packages (or any TypeScript code).

## Usage

**Compare exports of different package versions**

```bash
# Compare exports of different versions of a package
npx @grafana/levitate compare \
    --prev @grafana/ui@8.2.5 \
    --current @grafana/ui@canary
```

**List imports**

```bash
# List the imports used by a program
npx @grafana/levitate list-imports \
    --path <PATH-TO-A-PACKAGE>/module.ts \
    --filters "@common/pages" "@grafana/data" \
    --verbose
```

**List exports**

```bash
# List the exports of a compiled package
npx @grafana/levitate list-exports \
    --path <PATH-TO-A-PACKAGE>/index.d.ts
```

**Check compatibility between a module and a package**

To check the compatibility of code using a specific version of a package (e.g.: @grafana/data@9.0.0)
against another version of the same package (e.g. @grafana/data@9.0.5).

```bash
# Check if the current module.ts usage of @grafana/data is
# compatible with the latest version of it
npx @grafana/levitate is-compatible \
    --path <PATH-TO-A-PACKAGE>/module.ts \
    --target "@grafana/data@latest"
```

## Ignore specific exports changes

To ignore changes (add, change, remove) from specific export names you can create a `.levignore.js` file in the same directory where you invoke levitate.

The format of this file should be as follows:

```javascript
module.exports = {
  removals: [
    // each entry is a regex
    /Sample\.ignoreThisOne/,
    /Sample\.ignoreThisOneToo/,
    /Sample.*\b/,
    'Sample.ignoreThisOneToo', // strings are converted to regex to match exact
  ],
  changes: [
    //...
  ],
  additions: [
    //...
  ],
};
```

Note:

- Levitate will ignore symbols matching the regexes in any of the packages it inspects. If several packages export the same symbol name, they all will be ignored.
- This only affects the `compare` and `is-compatible` commands. It doesn't affect the `list-imports` or `list-exports` commands.
- You should locate your `.levignore.js` file in the same directory where you invoke levitate.

## Contributing

If you are interested in contributing to the Levitate project please read the [Contributing guide](https://github.com/grafana/levitate/blob/HEAD/CONTRIBUTING.md).

[npm-url]: https://www.npmjs.com/package/@grafana/levitate
[npm-badge]: https://img.shields.io/npm/v/@grafana/levitate.svg
[downloads-badge]: https://img.shields.io/npm/dm/@grafana/levitate.svg?color=blue
[build-badge]: https://github.com/grafana/levitate/actions/workflows/ci.yml/badge.svg
[build-url]: https://github.com/grafana/levitate/actions/workflows/ci.yml
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
