/// <reference types="react" />
import { VizLegendTableProps } from './types';
/**
 * @internal
 */
export declare const VizLegendTable: <T extends unknown>({ items, sortBy: sortKey, sortDesc, itemRenderer, className, onToggleSort, onLabelClick, onLabelMouseEnter, onLabelMouseOut, readonly, }: VizLegendTableProps<T>) => JSX.Element;
