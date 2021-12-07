import { Field } from '../types';
import { FunctionalVector } from './FunctionalVector';
/**
 * IndexVector is a simple vector implementation that returns the index value
 * for each element in the vector.  It is functionally equivolant a vector backed
 * by an array with values: `[0,1,2,...,length-1]`
 */
export declare class IndexVector extends FunctionalVector<number> {
    private len;
    constructor(len: number);
    get length(): number;
    get(index: number): number;
    /**
     * Returns a field representing the range [0 ... length-1]
     */
    static newField(len: number): Field<number>;
}
