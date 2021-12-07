/// <reference types="react" />
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
declare type Props<T> = Pick<DataSourcePluginOptionsEditorProps<T>, 'options' | 'onOptionsChange'>;
export declare function AlertingSettings<T extends {
    manageAlerts?: boolean;
}>({ options, onOptionsChange, }: Props<T>): JSX.Element;
export {};
