import { GrafanaTheme2 } from '../themes/types';
import { Field, FieldConfig, NumericRange, Threshold } from '../types';
export interface ColorScaleValue {
    percent: number;
    threshold: Threshold;
    color: string;
}
export declare type ScaleCalculator = (value: number) => ColorScaleValue;
export declare function getScaleCalculator(field: Field, theme: GrafanaTheme2): ScaleCalculator;
export declare function getMinMaxAndDelta(field: Field): NumericRange;
/**
 * @internal
 */
export declare function getFieldConfigWithMinMax(field: Field, local?: boolean): FieldConfig;
