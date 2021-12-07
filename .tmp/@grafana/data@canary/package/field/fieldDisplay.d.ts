import { DataFrame, DisplayValue, DisplayValueAlignmentFactors, Field, FieldConfig, FieldConfigSource, InterpolateFunction, LinkModel, TimeRange, TimeZone } from '../types';
import { DataFrameView } from '../dataframe/DataFrameView';
import { GrafanaTheme2 } from '../themes';
/**
 * Options for how to turn DataFrames into an array of display values
 */
export interface ReduceDataOptions {
    values?: boolean;
    /** if showing all values limit */
    limit?: number;
    /** When !values, pick one value for the whole field */
    calcs: string[];
    /** Which fields to show.  By default this is only numeric fields */
    fields?: string;
}
export declare const VAR_SERIES_NAME = "__series.name";
export declare const VAR_FIELD_NAME = "__field.displayName";
export declare const VAR_FIELD_LABELS = "__field.labels";
export declare const VAR_CALC = "__calc";
export declare const VAR_CELL_PREFIX = "__cell_";
export interface FieldSparkline {
    y: Field;
    x?: Field;
    timeRange?: TimeRange;
    highlightIndex?: number;
}
export interface FieldDisplay {
    name: string;
    field: FieldConfig;
    display: DisplayValue;
    sparkline?: FieldSparkline;
    view?: DataFrameView;
    colIndex?: number;
    rowIndex?: number;
    getLinks?: () => LinkModel[];
    hasLinks: boolean;
}
export interface GetFieldDisplayValuesOptions {
    data?: DataFrame[];
    reduceOptions: ReduceDataOptions;
    fieldConfig: FieldConfigSource;
    replaceVariables: InterpolateFunction;
    sparkline?: boolean;
    theme: GrafanaTheme2;
    timeZone?: TimeZone;
}
export declare const DEFAULT_FIELD_DISPLAY_VALUES_LIMIT = 25;
export declare const getFieldDisplayValues: (options: GetFieldDisplayValuesOptions) => FieldDisplay[];
export declare function hasLinks(field: Field): boolean;
export declare function getDisplayValueAlignmentFactors(values: FieldDisplay[]): DisplayValueAlignmentFactors;
