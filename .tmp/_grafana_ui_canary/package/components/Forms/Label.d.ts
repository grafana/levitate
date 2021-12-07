import React from 'react';
import { GrafanaTheme2 } from '@grafana/data';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    description?: React.ReactNode;
    category?: React.ReactNode[];
}
export declare const getLabelStyles: import("memoize-one").MemoizedFn<(theme: GrafanaTheme2) => {
    label: string;
    labelContent: string;
    description: string;
    categories: string;
    chevron: string;
}>;
export declare const Label: React.FC<LabelProps>;
