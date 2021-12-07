import { Field } from '../types/dataFrame';
import { KeyValue } from '../types/data';
export interface Dimension<T = any> {
    name: string;
    columns: Array<Field<T>>;
}
export declare type Dimensions = KeyValue<Dimension>;
export declare const createDimension: (name: string, columns: Field[]) => Dimension;
export declare const getColumnsFromDimension: (dimension: Dimension) => Field<any, import("..").Vector<any>>[];
export declare const getColumnFromDimension: (dimension: Dimension, column: number) => Field<any, import("..").Vector<any>>;
export declare const getValueFromDimension: (dimension: Dimension, column: number, row: number) => any;
export declare const getAllValuesFromDimension: (dimension: Dimension, column: number, row: number) => any[];
export declare const getDimensionByName: (dimensions: Dimensions, name: string) => Dimension<any>;
