# 🔮 Levitate

![npm version](https://img.shields.io/npm/v/@grafana/levitate)

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
npx @grafana/levitate isCompatible \
    --path <PATH-TO-A-PACKAGE>/module.ts \
    -- target "@grafana/data@latest"
```
