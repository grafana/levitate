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


export type BigQueryRow = {
  created: string;
  plugin_id: string;
  plugin_repository: string;
  plugin_version?: string;
  plugin_type?: string;
  is_default_import?: boolean;
  is_named_import?: boolean;
  import_statement?: string;
  package_name?: string;
  file_name: string;
  property_name?: string;
};
