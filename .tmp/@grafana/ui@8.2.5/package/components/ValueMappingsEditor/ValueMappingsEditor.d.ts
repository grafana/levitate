import React from 'react';
import { GrafanaTheme2, ValueMapping } from '@grafana/data';
export interface Props {
    value: ValueMapping[];
    onChange: (valueMappings: ValueMapping[]) => void;
}
export declare const ValueMappingsEditor: React.MemoExoticComponent<({ value, onChange }: Props) => JSX.Element>;
export declare const getStyles: (theme: GrafanaTheme2) => {
    modal: string;
    compactTable: string;
};
