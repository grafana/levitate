import { DataSourcePluginOptionsEditorProps, SelectableValue, KeyValue, DataSourceSettings, DataSourceInstanceSettings, DataSourceRef } from '../types';
/**
 * Convert instance settings to a reference
 *
 * @public
 */
export declare function getDataSourceRef(ds: DataSourceInstanceSettings): DataSourceRef;
/**
 * Returns true if the argument is a DataSourceRef
 *
 * @public
 */
export declare function isDataSourceRef(ref: DataSourceRef | string | null): ref is DataSourceRef;
/**
 * Get the UID from a string of reference
 *
 * @public
 */
export declare function getDataSourceUID(ref: DataSourceRef | string | null): string | undefined;
export declare const onUpdateDatasourceOption: (props: DataSourcePluginOptionsEditorProps, key: keyof DataSourceSettings) => (event: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => void;
export declare const onUpdateDatasourceJsonDataOption: <J, S, K extends keyof J>(props: DataSourcePluginOptionsEditorProps<J, S>, key: K) => (event: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => void;
export declare const onUpdateDatasourceSecureJsonDataOption: <J, S extends {} = KeyValue<any>>(props: DataSourcePluginOptionsEditorProps<J, S>, key: string) => (event: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement>) => void;
export declare const onUpdateDatasourceJsonDataOptionSelect: <J, S, K extends keyof J>(props: DataSourcePluginOptionsEditorProps<J, S>, key: K) => (selected: SelectableValue) => void;
export declare const onUpdateDatasourceJsonDataOptionChecked: <J, S, K extends keyof J>(props: DataSourcePluginOptionsEditorProps<J, S>, key: K) => (event: React.SyntheticEvent<HTMLInputElement>) => void;
export declare const onUpdateDatasourceSecureJsonDataOptionSelect: <J, S extends {} = KeyValue<any>>(props: DataSourcePluginOptionsEditorProps<J, S>, key: string) => (selected: SelectableValue) => void;
export declare const onUpdateDatasourceResetOption: (props: DataSourcePluginOptionsEditorProps, key: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
export declare function updateDatasourcePluginOption<J, S extends {} = KeyValue>(props: DataSourcePluginOptionsEditorProps<J, S>, key: keyof DataSourceSettings, val: any): void;
export declare const updateDatasourcePluginJsonDataOption: <J, S, K extends keyof J>(props: DataSourcePluginOptionsEditorProps<J, S>, key: K, val: any) => void;
export declare const updateDatasourcePluginSecureJsonDataOption: <J, S extends {} = KeyValue<any>>(props: DataSourcePluginOptionsEditorProps<J, S>, key: string, val: any) => void;
export declare const updateDatasourcePluginResetOption: <J, S extends {} = KeyValue<any>>(props: DataSourcePluginOptionsEditorProps<J, S>, key: string) => void;
