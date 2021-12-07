import { Transform } from "stream";
import { BigQueryRow, PluginImportInfo } from "./types";

export function mapper(): Transform {
  return new Transform({
    objectMode: true,
    transform: (info: PluginImportInfo, encoding, done) => {
      done(null, mapToBigQueryRow(info));
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
  };
}
