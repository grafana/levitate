import React from 'react';
import { VizLegendItem } from './types';
export interface Props<T> {
    item: VizLegendItem<T>;
    className?: string;
    onLabelClick?: (item: VizLegendItem<T>, event: React.MouseEvent<HTMLDivElement>) => void;
    onLabelMouseEnter?: (item: VizLegendItem, event: React.MouseEvent<HTMLDivElement>) => void;
    onLabelMouseOut?: (item: VizLegendItem, event: React.MouseEvent<HTMLDivElement>) => void;
    readonly?: boolean;
}
/**
 * @internal
 */
export declare const VizLegendListItem: {
    <T extends unknown = any>({ item, onLabelClick, onLabelMouseEnter, onLabelMouseOut, className, readonly, }: Props<T>): JSX.Element;
    displayName: string;
};
