import { ThresholdsConfig } from './thresholds';
import { ValueMapping } from './valueMapping';
import { QueryResultBase, Labels, NullValueMode } from './data';
import { DisplayProcessor, DisplayValue } from './displayValue';
import { DataLink, LinkModel } from './dataLink';
import { Vector } from './vector';
import { FieldColor } from './fieldColor';
import { ScopedVars } from './ScopedVars';
/** @public */
export declare enum FieldType {
    time = "time",
    number = "number",
    string = "string",
    boolean = "boolean",
    trace = "trace",
    other = "other"
}
/**
 * @public
 * Every property is optional
 *
 * Plugins may extend this with additional properties. Something like series overrides
 */
export interface FieldConfig<TOptions = any> {
    /**
     * The display value for this field.  This supports template variables blank is auto
     */
    displayName?: string;
    /**
     * This can be used by data sources that return and explicit naming structure for values and labels
     * When this property is configured, this value is used rather than the default naming strategy.
     */
    displayNameFromDS?: string;
    /**
     * Human readable field metadata
     */
    description?: string;
    /**
     * An explict path to the field in the datasource.  When the frame meta includes a path,
     * This will default to `${frame.meta.path}/${field.name}
     *
     * When defined, this value can be used as an identifier within the datasource scope, and
     * may be used to update the results
     */
    path?: string;
    /**
     * True if data source can write a value to the path.  Auth/authz are supported separately
     */
    writeable?: boolean;
    /**
     * True if data source field supports ad-hoc filters
     */
    filterable?: boolean;
    unit?: string;
    decimals?: number | null;
    min?: number | null;
    max?: number | null;
    mappings?: ValueMapping[];
    thresholds?: ThresholdsConfig;
    color?: FieldColor;
    nullValueMode?: NullValueMode;
    links?: DataLink[];
    noValue?: string;
    custom?: TOptions;
}
/** @public */
export interface ValueLinkConfig {
    /**
     * Result of field reduction
     */
    calculatedValue?: DisplayValue;
    /**
     * Index of the value row within Field. Should be provided only when value is not a result of a reduction
     */
    valueRowIndex?: number;
}
export interface Field<T = any, V = Vector<T>> {
    /**
     * Name of the field (column)
     */
    name: string;
    /**
     *  Field value type (string, number, etc)
     */
    type: FieldType;
    /**
     *  Meta info about how field and how to display it
     */
    config: FieldConfig;
    values: V;
    labels?: Labels;
    /**
     * Cached values with appropriate display and id values
     */
    state?: FieldState | null;
    /**
     * Convert text to the field value
     */
    parse?: (value: any) => T;
    /**
     * Convert a value for display
     */
    display?: DisplayProcessor;
    /**
     * Get value data links with variables interpolated
     */
    getLinks?: (config: ValueLinkConfig) => Array<LinkModel<Field>>;
}
/** @alpha */
export interface FieldState {
    /**
     * An appropriate name for the field (does not include frame info)
     */
    displayName?: string | null;
    /**
     * Cache of reduced values
     */
    calcs?: FieldCalcs;
    /**
     * The numeric range for values in this field.  This value will respect the min/max
     * set in field config, or when set to `auto` this will have the min/max for all data
     * in the response
     */
    range?: NumericRange;
    /**
     * Appropriate values for templating
     */
    scopedVars?: ScopedVars;
    /**
     * Series index is index for this field in a larger data set that can span multiple DataFrames
     * Useful for assigning color to series by looking up a color in a palette using this index
     */
    seriesIndex?: number;
    /**
     * Location of this field within the context frames results
     *
     * @internal -- we will try to make this unnecessary
     */
    origin?: DataFrameFieldIndex;
}
/** @public */
export interface NumericRange {
    min?: number | null;
    max?: number | null;
    delta: number;
}
export interface DataFrame extends QueryResultBase {
    name?: string;
    fields: Field[];
    length: number;
}
/**
 * @public
 * Like a field, but properties are optional and values may be a simple array
 */
export interface FieldDTO<T = any> {
    name: string;
    type?: FieldType;
    config?: FieldConfig;
    values?: Vector<T> | T[];
    labels?: Labels;
}
/**
 * @public
 * Like a DataFrame, but fields may be a FieldDTO
 */
export interface DataFrameDTO extends QueryResultBase {
    name?: string;
    fields: Array<FieldDTO | Field>;
}
export interface FieldCalcs extends Record<string, any> {
}
export declare const TIME_SERIES_VALUE_FIELD_NAME = "Value";
export declare const TIME_SERIES_TIME_FIELD_NAME = "Time";
export declare const TIME_SERIES_METRIC_FIELD_NAME = "Metric";
/**
 * Describes where a specific data frame field is located within a
 * dataset of type DataFrame[]
 *
 * @internal -- we will try to make this unnecessary
 */
export interface DataFrameFieldIndex {
    frameIndex: number;
    fieldIndex: number;
}