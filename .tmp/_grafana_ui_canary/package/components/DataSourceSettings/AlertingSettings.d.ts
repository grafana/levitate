import { DataSourceInstanceSettings, DataSourceJsonData, DataSourcePluginOptionsEditorProps } from '@grafana/data';
interface Props<T> extends Pick<DataSourcePluginOptionsEditorProps<T>, 'options' | 'onOptionsChange'> {
    alertmanagerDataSources: Array<DataSourceInstanceSettings<DataSourceJsonData>>;
}
interface AlertingConfig extends DataSourceJsonData {
    manageAlerts?: boolean;
}
export declare function AlertingSettings<T extends AlertingConfig>({ alertmanagerDataSources, options, onOptionsChange, }: Props<T>): JSX.Element;
export {};
