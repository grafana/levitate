import React from 'react';
import { FieldConfigEditorProps, StringFieldConfigSettings } from '@grafana/data';
declare type Props = FieldConfigEditorProps<string[], StringFieldConfigSettings>;
interface State {
    showAdd: boolean;
}
export declare class StringArrayEditor extends React.PureComponent<Props, State> {
    state: {
        showAdd: boolean;
    };
    onRemoveString: (index: number) => void;
    onValueChange: (e: React.SyntheticEvent, idx: number) => void;
    render(): JSX.Element;
}
export {};
