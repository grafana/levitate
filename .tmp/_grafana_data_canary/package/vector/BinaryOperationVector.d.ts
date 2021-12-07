import { Vector } from '../types/vector';
import { BinaryOperation } from '../utils/binaryOperators';
/**
 * @public
 */
export declare class BinaryOperationVector implements Vector<number> {
    private left;
    private right;
    private operation;
    constructor(left: Vector<number>, right: Vector<number>, operation: BinaryOperation);
    get length(): number;
    get(index: number): number;
    toArray(): number[];
    toJSON(): number[];
}
