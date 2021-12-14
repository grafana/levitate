# Levitate with BigQuery

This is a utility tooling for shipping levitate data into big query.

## Install

```bash
yarn install
```

## Usage

**Together with levitate**

```bash
# Build the binary
yarn build

# Specify the google bigquery credentials file path via
export BIGQUERY_KEY_FILENAME="/credentials.json"

# Use levitate to get all imports for packages and send to big query
npx @grafana/levitate gobble [args] | node ./dist/index.js \
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
