import { Vector } from '../types/vector';
interface AppendedVectorInfo<T> {
    start: number;
    end: number;
    values: Vector<T>;
}
/**
 * This may be more trouble than it is worth.  This trades some computation time for
 * RAM -- rather than allocate a new array the size of all previous arrays, this just
 * points the correct index to their original array values
 */
export declare class AppendedVectors<T = any> implements Vector<T> {
    length: number;
    source: Array<AppendedVectorInfo<T>>;
    constructor(startAt?: number);
    /**
     * Make the vector look like it is this long
     */
    setLength(length: number): void;
    append(v: Vector<T>): AppendedVectorInfo<T>;
    get(index: number): T;
    toArray(): T[];
    toJSON(): T[];
}
export {};
