import { Transform } from "stream";
import { BigQueryRow, JsonRow, PluginImportInfo } from "./types";

export function mapper(): Transform {
  return new Transform({
    objectMode: true,
    transform: (row: JsonRow, encoding, done) => {
      done(null, mapToBigQueryRow(row.value));
    },
  });
}

function mapToBigQueryRow(info: PluginImportInfo): BigQueryRow {
  return {
    plugin: {
      id: info.pluginId,
      repository: info.repository,
      version: info.pluginVersion,
      type: info.pluginType,
    },
    is_default: info.isDefaultImport,
    is_named: info.isNamedImport,
    statement: info.importStatementAsText,
    package_name: info.packageName,
    file_name: info.fileName,
    property_name: info.propertyName,
  };
}
