import { LegendProps } from './types';
/**
 * @public
 */
export declare function VizLegend<T>({ items, displayMode, sortBy: sortKey, seriesVisibilityChangeBehavior, sortDesc, onLabelClick, onToggleSort, placement, className, itemRenderer, readonly, }: LegendProps<T>): JSX.Element | null;
export declare namespace VizLegend {
    var displayName: string;
}
