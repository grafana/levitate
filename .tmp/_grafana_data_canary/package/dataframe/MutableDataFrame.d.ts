import { Field, DataFrame, DataFrameDTO, FieldDTO } from '../types/dataFrame';
import { QueryResultMeta } from '../types/data';
import { MutableVector } from '../types/vector';
import { FunctionalVector } from '../vector/FunctionalVector';
export declare type MutableField<T = any> = Field<T, MutableVector<T>>;
declare type MutableVectorCreator = (buffer?: any[]) => MutableVector;
export declare const MISSING_VALUE: any;
export declare class MutableDataFrame<T = any> extends FunctionalVector<T> implements DataFrame, MutableVector<T> {
    name?: string;
    refId?: string;
    meta?: QueryResultMeta;
    fields: MutableField[];
    private first;
    private creator;
    constructor(source?: DataFrame | DataFrameDTO, creator?: MutableVectorCreator);
    get length(): number;
    addFieldFor(value: any, name?: string): MutableField;
    addField(f: Field | FieldDTO, startLength?: number): MutableField;
    validate(): void;
    /**
     * Reverse all values
     */
    reverse(): void;
    /**
     * This will add each value to the corresponding column
     */
    appendRow(row: any[]): void;
    /**
     * Add values from an object to corresponding fields. Similar to appendRow but does not create new fields.
     */
    add(value: T): void;
    set(index: number, value: T): void;
    /**
     * Get an object with a property for each field in the DataFrame
     */
    get(idx: number): T;
    /**
     * The simplified JSON values used in JSON.stringify()
     */
    toJSON(): DataFrameDTO;
}
export {};
