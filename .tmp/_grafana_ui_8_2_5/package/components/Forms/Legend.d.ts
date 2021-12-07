import React, { ReactNode } from 'react';
import { GrafanaTheme } from '@grafana/data';
export interface LabelProps extends React.HTMLAttributes<HTMLLegendElement> {
    children: string | ReactNode;
    description?: string;
}
export declare const getLegendStyles: (theme: GrafanaTheme) => {
    legend: string;
};
export declare const Legend: React.FC<LabelProps>;
