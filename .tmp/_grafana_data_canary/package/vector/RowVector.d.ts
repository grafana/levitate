import { Vector } from '../types';
/**
 * RowVector makes the row values look like a vector
 * @internal
 */
export declare class RowVector implements Vector {
    private columns;
    constructor(columns: Vector[]);
    rowIndex: number;
    get length(): number;
    get(index: number): number;
    toArray(): number[];
    toJSON(): number[];
}
