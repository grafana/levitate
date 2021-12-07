import { Vector } from '../types/vector';
/**
 * Values are returned in the order defined by the input parameter
 */
export declare class SortedVector<T = any> implements Vector<T> {
    private source;
    private order;
    constructor(source: Vector<T>, order: number[]);
    get length(): number;
    get(index: number): T;
    toArray(): T[];
    toJSON(): T[];
}
