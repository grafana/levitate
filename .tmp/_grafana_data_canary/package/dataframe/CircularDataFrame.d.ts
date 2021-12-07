import { MutableDataFrame } from './MutableDataFrame';
interface CircularOptions {
    append?: 'head' | 'tail';
    capacity?: number;
}
/**
 * This dataframe can have values constantly added, and will never
 * exceed the given capacity
 */
export declare class CircularDataFrame<T = any> extends MutableDataFrame<T> {
    constructor(options: CircularOptions);
}
export {};
