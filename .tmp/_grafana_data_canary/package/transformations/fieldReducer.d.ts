import { Field, FieldCalcs } from '../types/index';
import { Registry, RegistryItem } from '../utils/Registry';
export declare enum ReducerID {
    sum = "sum",
    max = "max",
    min = "min",
    logmin = "logmin",
    mean = "mean",
    last = "last",
    first = "first",
    count = "count",
    range = "range",
    diff = "diff",
    diffperc = "diffperc",
    delta = "delta",
    step = "step",
    firstNotNull = "firstNotNull",
    lastNotNull = "lastNotNull",
    changeCount = "changeCount",
    distinctCount = "distinctCount",
    allIsZero = "allIsZero",
    allIsNull = "allIsNull",
    allValues = "allValues"
}
declare type FieldReducer = (field: Field, ignoreNulls: boolean, nullAsZero: boolean) => FieldCalcs;
export interface FieldReducerInfo extends RegistryItem {
    emptyInputResult?: any;
    standard: boolean;
    reduce?: FieldReducer;
}
interface ReduceFieldOptions {
    field: Field;
    reducers: string[];
}
/**
 * @returns an object with a key for each selected stat
 * NOTE: This will also modify the 'field.state' object,
 * leaving values in a cache until cleared.
 */
export declare function reduceField(options: ReduceFieldOptions): FieldCalcs;
export declare const fieldReducers: Registry<FieldReducerInfo>;
export declare function doStandardCalcs(field: Field, ignoreNulls: boolean, nullAsZero: boolean): FieldCalcs;
export {};
