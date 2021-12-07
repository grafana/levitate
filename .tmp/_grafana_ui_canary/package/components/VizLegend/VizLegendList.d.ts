import { VizLegendBaseProps } from './types';
export interface Props<T> extends VizLegendBaseProps<T> {
}
/**
 * @internal
 */
export declare const VizLegendList: {
    <T extends unknown>({ items, itemRenderer, onLabelMouseEnter, onLabelMouseOut, onLabelClick, placement, className, readonly, }: Props<T>): JSX.Element;
    displayName: string;
};
