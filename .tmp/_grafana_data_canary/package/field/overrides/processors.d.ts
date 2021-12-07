import { DataLink, Field, FieldOverrideContext, SelectableValue, SliderMarks, ThresholdsConfig, ValueMapping } from '../../types';
export declare const identityOverrideProcessor: <T>(value: T, _context: FieldOverrideContext, _settings: any) => T;
export interface NumberFieldConfigSettings {
    placeholder?: string;
    integer?: boolean;
    min?: number;
    max?: number;
    step?: number;
}
export declare const numberOverrideProcessor: (value: any, context: FieldOverrideContext, settings?: NumberFieldConfigSettings | undefined) => number | undefined;
export declare const displayNameOverrideProcessor: (value: any, context: FieldOverrideContext, settings?: StringFieldConfigSettings | undefined) => any;
export interface SliderFieldConfigSettings {
    min: number;
    max: number;
    step?: number;
    included?: boolean;
    marks?: SliderMarks;
    ariaLabelForHandle?: string;
}
export interface DataLinksFieldConfigSettings {
}
export declare const dataLinksOverrideProcessor: (value: any, _context: FieldOverrideContext, _settings?: DataLinksFieldConfigSettings | undefined) => DataLink<any>[];
export interface ValueMappingFieldConfigSettings {
}
export declare const valueMappingsOverrideProcessor: (value: any, _context: FieldOverrideContext, _settings?: ValueMappingFieldConfigSettings | undefined) => ValueMapping[];
export interface SelectFieldConfigSettings<T> {
    allowCustomValue?: boolean;
    /** The default options */
    options: Array<SelectableValue<T>>;
    /** Optionally use the context to define the options */
    getOptions?: (context: FieldOverrideContext) => Promise<Array<SelectableValue<T>>>;
}
export declare const selectOverrideProcessor: (value: any, _context: FieldOverrideContext, _settings?: SelectFieldConfigSettings<any> | undefined) => any;
export interface StringFieldConfigSettings {
    placeholder?: string;
    maxLength?: number;
    expandTemplateVars?: boolean;
    useTextarea?: boolean;
    rows?: number;
}
export declare const stringOverrideProcessor: (value: any, context: FieldOverrideContext, settings?: StringFieldConfigSettings | undefined) => any;
export interface ThresholdsFieldConfigSettings {
}
export declare const thresholdsOverrideProcessor: (value: any, _context: FieldOverrideContext, _settings?: ThresholdsFieldConfigSettings | undefined) => ThresholdsConfig;
export interface UnitFieldConfigSettings {
}
export declare const unitOverrideProcessor: (value: boolean, _context: FieldOverrideContext, _settings?: UnitFieldConfigSettings | undefined) => boolean;
export declare const booleanOverrideProcessor: (value: boolean, _context: FieldOverrideContext, _settings?: ThresholdsFieldConfigSettings | undefined) => boolean;
export interface FieldColorConfigSettings {
    /**
     * When switching to a visualization that does not support by value coloring then Grafana will
     * switch to a by series palette based color mode
     */
    byValueSupport?: boolean;
    /**
     * When switching to a visualization that has this set to true then Grafana will change color mode
     * to from thresholds if it was set to a by series palette
     */
    preferThresholdsMode?: boolean;
    /**
     * Set to true if the visualization supports both by value and by series
     * This will enable the Color by series UI option that sets the `color.seriesBy` option.
     */
    bySeriesSupport?: boolean;
}
export interface StatsPickerConfigSettings {
    /**
     * Enable multi-selection in the stats picker
     */
    allowMultiple: boolean;
    /**
     * Default stats to be use in the stats picker
     */
    defaultStat?: string;
}
export interface FieldNamePickerConfigSettings {
    /**
     * Function is a predicate, to test each element of the array.
     * Return a value that coerces to true to keep the field, or to false otherwise.
     */
    filter?: (field: Field) => boolean;
    /**
     * Show this text when no values are found
     */
    noFieldsMessage?: string;
    /**addFieldNamePicker
     * Sets the width to a pixel value.
     */
    width?: number;
    /**
     * Placeholder text to display when nothing is selected.
     */
    placeholderText?: string;
}
