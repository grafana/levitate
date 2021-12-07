import { Vector } from '../types';
import { FunctionalVector } from './FunctionalVector';
/**
 * This will force all values to be numbers
 *
 * @public
 */
export declare class AsNumberVector extends FunctionalVector<number> {
    private field;
    constructor(field: Vector);
    get length(): number;
    get(index: number): number;
}
