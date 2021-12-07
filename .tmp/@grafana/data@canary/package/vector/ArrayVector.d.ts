import { MutableVector } from '../types/vector';
import { FunctionalVector } from './FunctionalVector';
/**
 * @public
 */
export declare class ArrayVector<T = any> extends FunctionalVector<T> implements MutableVector<T> {
    buffer: T[];
    constructor(buffer?: T[]);
    get length(): number;
    add(value: T): void;
    get(index: number): T;
    set(index: number, value: T): void;
    reverse(): void;
    toArray(): T[];
    toJSON(): T[];
}
