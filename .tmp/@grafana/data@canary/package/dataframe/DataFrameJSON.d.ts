import { DataFrame, FieldType, FieldConfig, Labels, QueryResultMeta } from '../types';
/**
 * The JSON transfer object for DataFrames.  Values are stored in simple JSON
 *
 * @alpha
 */
export interface DataFrameJSON {
    /**
     * The schema defines the field type and configuration.
     */
    schema?: DataFrameSchema;
    /**
     * The field data
     */
    data?: DataFrameData;
}
/**
 * @alpha
 */
export interface DataFrameData {
    /**
     * A columnar store that matches fields defined by schema.
     */
    values: any[][];
    /**
     * Since JSON cannot encode NaN, Inf, -Inf, and undefined, these entities
     * are decoded after JSON.parse() using this struct
     */
    entities?: Array<FieldValueEntityLookup | null>;
    /**
     * Holds value bases per field so we can encode numbers from fixed points
     * e.g. [1612900958, 1612900959, 1612900960] -> 1612900958 + [0, 1, 2]
     */
    bases?: number[];
    /**
     * Holds value multipliers per field so we can encode large numbers concisely
     * e.g. [4900000000, 35000000000] -> 1e9 + [4.9, 35]
     */
    factors?: number[];
    /**
     * Holds enums per field so we can encode recurring values as ints
     * e.g. ["foo", "foo", "baz", "foo"] -> ["foo", "baz"] + [0,0,1,0]
     */
    enums?: any[][];
}
/**
 * The JSON transfer object for DataFrames.  Values are stored in simple JSON
 *
 * @alpha
 */
export interface DataFrameSchema {
    /**
     * Matches the query target refId
     */
    refId?: string;
    /**
     * Initial response global metadata
     */
    meta?: QueryResultMeta;
    /**
     * Frame name
     */
    name?: string;
    /**
     * Field definition without any metadata
     */
    fields: FieldSchema[];
}
/**
 * Field object passed over JSON
 *
 * @alpha
 */
export interface FieldSchema {
    name: string;
    type?: FieldType;
    config?: FieldConfig;
    labels?: Labels;
}
/**
 * Since JSON cannot encode NaN, Inf, -Inf, and undefined, the locations
 * of these entities in field value arrays are stored here for restoration
 * after JSON.parse()
 *
 * @alpha
 */
export interface FieldValueEntityLookup {
    NaN?: number[];
    Undef?: number[];
    Inf?: number[];
    NegInf?: number[];
}
/**
 * @internal use locally
 */
export declare function decodeFieldValueEntities(lookup: FieldValueEntityLookup, values: any[]): void;
/**
 * NOTE: dto.data.values will be mutated and decoded/inflated using entities,bases,factors,enums
 *
 * @alpha
 */
export declare function dataFrameFromJSON(dto: DataFrameJSON): DataFrame;
/**
 * This converts DataFrame to a json representation with distinct schema+data
 *
 * @alpha
 */
export declare function dataFrameToJSON(frame: DataFrame): DataFrameJSON;
