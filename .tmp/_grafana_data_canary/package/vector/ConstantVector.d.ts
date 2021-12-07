import { Vector } from '../types/vector';
/**
 * @public
 */
export declare class ConstantVector<T = any> implements Vector<T> {
    private value;
    private len;
    constructor(value: T, len: number);
    get length(): number;
    get(index: number): T;
    toArray(): T[];
    toJSON(): T[];
}
