import { PureComponent } from 'react';
import { DataSourceSettings } from '@grafana/data';
export interface CustomHeader {
    id: string;
    name: string;
    value: string;
    configured: boolean;
}
export declare type CustomHeaders = CustomHeader[];
export interface Props {
    dataSourceConfig: DataSourceSettings<any, any>;
    onChange: (config: DataSourceSettings) => void;
}
export interface State {
    headers: CustomHeaders;
}
export declare class CustomHeadersSettings extends PureComponent<Props, State> {
    state: State;
    constructor(props: Props);
    updateSettings: () => void;
    onHeaderAdd: () => void;
    onHeaderChange: (headerIndex: number, value: CustomHeader) => void;
    onHeaderReset: (headerId: string) => void;
    onHeaderRemove: (headerId: string) => void;
    render(): JSX.Element;
}
export default CustomHeadersSettings;
