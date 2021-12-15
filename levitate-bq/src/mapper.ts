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
    created: new Date().toISOString(),
    plugin_id: info.pluginId,
    plugin_repository: info.repository,
    plugin_version: info.pluginVersion,
    plugin_type: info.pluginType,
    is_default_import: info.isDefaultImport,
    is_named_import: info.isNamedImport,
    import_statement: info.importStatementAsText,
    package_name: info.packageName,
    file_name: info.fileName,
    property_name: info.propertyName,
  };
}
