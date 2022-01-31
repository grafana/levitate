# 🔮 Levitate

[![npm version][npm-badge]][npm-url]
[![npm downloads][downloads-badge]][npm-url]
[![CI][build-badge]][build-url]
[![prettier][prettier-badge]][prettier-url]
[![TypeScript][typescript-badge]][typescript-url]

A tool for helping to understand APIs exported and consumed by NPM packages (or any TypeScript code).

<<<<<<< HEAD

## Install

```bash
yarn install
```

## Develop

```bash
# Watch and rebuild the app on every file change
yarn dev

# Build the app
yarn build

# Build and bundle the app into a single executable JS file
yarn bundle
```

### Development tips

#### Environment variables

- Use `DEBUG=*` to display debugging messages
- Use `LEVITATE_CACHE=1` to re-use downloaded npm packages.

#### Run with ts-node for faster iteration

You can run directly from the source with `ts-node`. e.g:

` node --loader ts-node/esm --inspect ./src/bin.ts compare --prev @grafana/schema@9.0.7 --current @grafana/schema@latest`

=======

> > > > > > > 1097301 (docs: move dev scripts from readme to contributing)

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

To check the compatibility of code using an specific version of a pacakge (e.g.: @grafana/data@9.0.0)
and another version of the same package (e.g. @grafana/data@9.0.5).

```bash
# Check if the current module.ts usage of @grafana/data is
# compatible with the latest version of it
npx @grafana/levitate is-compatible \
    --path <PATH-TO-A-PACKAGE>/module.ts \
    -- target "@grafana/data@latest"
```

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
