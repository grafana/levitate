import { DataTransformerInfo, NullValueMode } from '../../types';
import { ReducerID } from '../fieldReducer';
import { BinaryOperationID } from '../../utils/binaryOperators';
export declare enum CalculateFieldMode {
    ReduceRow = "reduceRow",
    BinaryOperation = "binary"
}
export interface ReduceOptions {
    include?: string[];
    reducer: ReducerID;
    nullValueMode?: NullValueMode;
}
export interface BinaryOptions {
    left: string;
    operator: BinaryOperationID;
    right: string;
}
export interface CalculateFieldTransformerOptions {
    timeSeries?: boolean;
    mode: CalculateFieldMode;
    reduce?: ReduceOptions;
    binary?: BinaryOptions;
    replaceFields?: boolean;
    alias?: string;
}
export declare const calculateFieldTransformer: DataTransformerInfo<CalculateFieldTransformerOptions>;
export declare function getNameFromOptions(options: CalculateFieldTransformerOptions): string;
