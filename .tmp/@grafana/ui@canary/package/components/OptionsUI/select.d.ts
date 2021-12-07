import React from 'react';
import { FieldConfigEditorProps, SelectFieldConfigSettings, SelectableValue } from '@grafana/data';
interface State<T> {
    isLoading: boolean;
    options: Array<SelectableValue<T>>;
}
declare type Props<T> = FieldConfigEditorProps<T, SelectFieldConfigSettings<T>>;
export declare class SelectValueEditor<T> extends React.PureComponent<Props<T>, State<T>> {
    state: State<T>;
    componentDidMount(): void;
    componentDidUpdate(oldProps: Props<T>): void;
    updateOptions: () => Promise<void>;
    render(): JSX.Element;
}
export {};
