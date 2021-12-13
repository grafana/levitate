# 🔮 Levitate

A tool for helping to understand APIs exported and consumed by NPM packages (or any TypeScript code).

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

## Usage

**Compare exports of different package versions**

```bash
# Build the binary
yarn build

# Compare exports of different versions of a package
node ./dist/bin.js compare \
    --prev @grafana/ui@8.2.5 \
    --current @grafana/ui@canary
```

**List imports**

```bash
# Build the binary
yarn build

# List the imports used by a program
node ./dist/bin.js list-imports \
    --path <PATH-TO-A-PACKAGE>/module.ts \
    --filters "@common/pages" "@grafana/data" \
    --verbose
```

**List exports**

```bash
# Build the binary
yarn build

# List the exports of a compiled package
node ./dist/bin.js list-exports \
    --path <PATH-TO-A-PACKAGE>/index.d.ts
```
