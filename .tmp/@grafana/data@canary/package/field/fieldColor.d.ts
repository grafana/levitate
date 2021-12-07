import { Field, FieldColorModeId, Threshold } from '../types';
import { RegistryItem } from '../utils';
import { Registry } from '../utils/Registry';
import { ColorScaleValue } from './scale';
import { GrafanaTheme2 } from '../themes/types';
/** @beta */
export declare type FieldValueColorCalculator = (value: number, percent: number, Threshold?: Threshold) => string;
/** @beta */
export interface FieldColorMode extends RegistryItem {
    getCalculator: (field: Field, theme: GrafanaTheme2) => FieldValueColorCalculator;
    getColors?: (theme: GrafanaTheme2) => string[];
    isContinuous?: boolean;
    isByValue?: boolean;
}
/** @internal */
export declare const fieldColorModeRegistry: Registry<FieldColorMode>;
interface FieldColorSchemeModeOptions {
    id: string;
    name: string;
    description?: string;
    getColors: (theme: GrafanaTheme2) => string[];
    isContinuous: boolean;
    isByValue: boolean;
}
export declare class FieldColorSchemeMode implements FieldColorMode {
    id: string;
    name: string;
    description?: string;
    isContinuous: boolean;
    isByValue: boolean;
    colorCache?: string[];
    colorCacheTheme?: GrafanaTheme2;
    interpolator?: (value: number) => string;
    getNamedColors?: (theme: GrafanaTheme2) => string[];
    constructor(options: FieldColorSchemeModeOptions);
    getColors(theme: GrafanaTheme2): string[];
    private getInterpolator;
    getCalculator(field: Field, theme: GrafanaTheme2): (_: number, percent: number, _threshold?: Threshold | undefined) => string;
}
/** @beta */
export declare function getFieldColorModeForField(field: Field): FieldColorMode;
/** @beta */
export declare function getFieldColorMode(mode?: FieldColorModeId | string): FieldColorMode;
/**
 * @alpha
 * Function that will return a series color for any given color mode. If the color mode is a by value color
 * mode it will use the field.config.color.seriesBy property to figure out which value to use
 */
export declare function getFieldSeriesColor(field: Field, theme: GrafanaTheme2): ColorScaleValue;
export {};
