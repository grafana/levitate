# POC 3

This is a utility tooling for shipping poc 3 statistics to big query.

## Install

```bash
yarn install
```

## Usage

**Together with poc3**

```bash
# Build the binary
yarn build

# Use poc3 to get all imports for packages and send to big query
<poc3> gobble [args] | node ./dist/index.js \
    -dataset gcom_plugins \
    -table grafana_import
```

**Together with local example**

```bash
# Build the binary
yarn build

# Pipe an already existing json file of package imports and send to big query
cat example.json | node ./dist/index.js \
    -dataset gcom_plugins \
    -table grafana_import
```
