import { MutableVector } from '../types/vector';
import { FunctionalVector } from './FunctionalVector';
interface CircularOptions<T> {
    buffer?: T[];
    append?: 'head' | 'tail';
    capacity?: number;
}
/**
 * Circular vector uses a single buffer to capture a stream of values
 * overwriting the oldest value on add.
 *
 * This supports adding to the 'head' or 'tail' and will grow the buffer
 * to match a configured capacity.
 *
 * @public
 */
export declare class CircularVector<T = any> extends FunctionalVector<T> implements MutableVector<T> {
    private buffer;
    private index;
    private capacity;
    private tail;
    constructor(options: CircularOptions<T>);
    /**
     * This gets the appropriate add function depending on the buffer state:
     *  * head vs tail
     *  * growing buffer vs overwriting values
     */
    private getAddFunction;
    setCapacity(v: number): void;
    setAppendMode(mode: 'head' | 'tail'): void;
    reverse(): void;
    /**
     * Add the value to the buffer
     */
    add: (value: T) => void;
    get(index: number): T;
    set(index: number, value: T): void;
    get length(): number;
    toArray(): T[];
    toJSON(): T[];
}
export {};
