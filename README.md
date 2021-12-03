# POC 3

An experimental tool for helping to understand APIs used by plugins and detecting breaking changes.

## Install

```bash
yarn install
```

## Usage

**Compare exports of packages**

```bash
# Build the binary
yarn build

# Comparing exports of different versions of a package
node ./bin/bin.js compare \
    --current-package <PATH-TO-A-PACKAGE>/index.d.ts \
    --prev-package <PATH-TO-A-PACKAGE>/index.d.ts
```

**List imports**

```bash
# Build the binary
yarn build

# List the imports used by a program
node ./bin/bin.js list-imports \
    --path <PATH-TO-A-PACKAGE>/module.ts \
    --filters "@common/pages" "@grafana/data" \
    --verbose
```

**List exports**

```bash
# Build the binary
yarn build

# List the exports of a compiled package
node ./bin/bin.js list-exports \
    --path <PATH-TO-A-PACKAGE>/index.d.ts
```
