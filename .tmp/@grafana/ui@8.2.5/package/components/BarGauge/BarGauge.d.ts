import React, { PureComponent, CSSProperties, ReactNode } from 'react';
import { TimeSeriesValue, DisplayValue, DisplayValueAlignmentFactors, DisplayProcessor, FieldConfig, TextDisplayOptions, VizOrientation } from '@grafana/data';
import { Themeable2 } from '../../types';
export interface Props extends Themeable2 {
    height: number;
    width: number;
    field: FieldConfig;
    display?: DisplayProcessor;
    value: DisplayValue;
    orientation: VizOrientation;
    text?: TextDisplayOptions;
    itemSpacing?: number;
    lcdCellWidth?: number;
    displayMode: BarGaugeDisplayMode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    className?: string;
    showUnfilled?: boolean;
    alignmentFactors?: DisplayValueAlignmentFactors;
}
export declare enum BarGaugeDisplayMode {
    Basic = "basic",
    Lcd = "lcd",
    Gradient = "gradient"
}
export declare class BarGauge extends PureComponent<Props> {
    static defaultProps: Partial<Props>;
    render(): JSX.Element;
    renderBarAndValue(): React.ReactNode;
    renderBasicAndGradientBars(): ReactNode;
    renderRetroBars(): ReactNode;
}
interface CellColors {
    background: string;
    backgroundShade?: string;
    border: string;
    isLit?: boolean;
}
export declare function getTitleStyles(props: Props): {
    wrapper: CSSProperties;
    title: CSSProperties;
};
interface BasicAndGradientStyles {
    wrapper: CSSProperties;
    bar: CSSProperties;
    emptyBar: CSSProperties;
    value: CSSProperties;
}
interface BarAndValueDimensions {
    valueWidth: number;
    valueHeight: number;
    maxBarWidth: number;
    maxBarHeight: number;
    wrapperHeight: number;
    wrapperWidth: number;
}
/**
 * @internal
 * Only exported for unit tests
 **/
export declare function calculateBarAndValueDimensions(props: Props): BarAndValueDimensions;
export declare function getCellColor(positionValue: TimeSeriesValue, value: Props['value'], display: Props['display']): CellColors;
export declare function getValuePercent(value: number, minValue: number, maxValue: number): number;
/**
 * Only exported to for unit test
 */
export declare function getBasicAndGradientStyles(props: Props): BasicAndGradientStyles;
/**
 * Only exported to for unit test
 */
export declare function getBarGradient(props: Props, maxSize: number): string;
/**
 * Only exported to for unit test
 */
export declare function getValueColor(props: Props): string;
export {};
