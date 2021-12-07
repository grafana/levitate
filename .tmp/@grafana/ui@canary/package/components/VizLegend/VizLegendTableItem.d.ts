import React from 'react';
import { VizLegendItem } from './types';
export interface Props {
    key?: React.Key;
    item: VizLegendItem;
    className?: string;
    onLabelClick?: (item: VizLegendItem, event: React.MouseEvent<HTMLDivElement>) => void;
    onLabelMouseEnter?: (item: VizLegendItem, event: React.MouseEvent<HTMLDivElement>) => void;
    onLabelMouseOut?: (item: VizLegendItem, event: React.MouseEvent<HTMLDivElement>) => void;
    readonly?: boolean;
}
/**
 * @internal
 */
export declare const LegendTableItem: React.FunctionComponent<Props>;
