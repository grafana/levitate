import React from 'react';
import { GraphProps } from './Graph';
import { LegendDisplayMode, LegendPlacement } from '@grafana/schema';
export interface GraphWithLegendProps extends GraphProps {
    legendDisplayMode: LegendDisplayMode;
    placement: LegendPlacement;
    hideEmpty?: boolean;
    hideZero?: boolean;
    sortLegendBy?: string;
    sortLegendDesc?: boolean;
    onSeriesToggle?: (label: string, event: React.MouseEvent<HTMLElement>) => void;
    onToggleSort: (sortBy: string) => void;
}
export declare const GraphWithLegend: React.FunctionComponent<GraphWithLegendProps>;
