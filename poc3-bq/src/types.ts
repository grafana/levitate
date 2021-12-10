export type JsonRow = {
  key: number;
  value: PluginImportInfo;
};

export type PluginImportInfo = {
  pluginId: string;
  pluginVersion: string;
  pluginType: string;
  repository: string;
  pluginName: string;
  packageName: string;
  isNamedImport: boolean;
  isDefaultImport: boolean;
  propertyName?: string;
  fileName: string;
  importStatementAsText?: string;
};

export type BigQueryPlugin = {
  id: string;
  repository: string;
  type?: string;
  version?: string;
};

export type BigQueryRow = {
  plugin: BigQueryPlugin;
  package_name: string;
  file_name: string;
  statement?: string;
  is_named?: boolean;
  is_default?: boolean;
  property_name?: string;
};
