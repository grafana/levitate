import { Field, FieldType, DataFrame } from '../types/dataFrame';
import { QueryResultMeta } from '../types';
import { FunctionalVector } from '../vector/FunctionalVector';
/** @public */
export declare type ValueConverter<T = any> = (val: any) => T;
/**
 * The ArrayDataFrame takes an array of objects and presents it as a DataFrame
 *
 * @alpha
 */
export declare class ArrayDataFrame<T = any> extends FunctionalVector<T> implements DataFrame {
    private source;
    name?: string;
    refId?: string;
    meta?: QueryResultMeta;
    fields: Field[];
    length: number;
    constructor(source: T[], names?: string[]);
    /**
     * Add a field for each property in the object.  This will guess the type
     */
    setFieldsFromObject(obj: any): void;
    /**
     * Configure how the object property is passed to the data frame
     */
    setFieldType(name: string, type: FieldType, converter?: ValueConverter): Field;
    /**
     * Get an object with a property for each field in the DataFrame
     */
    get(idx: number): T;
    /**
     * The simplified JSON values used in JSON.stringify()
     */
    toJSON(): import("../types").DataFrameDTO;
}
