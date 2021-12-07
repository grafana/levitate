import { Vector } from '../types/vector';
import { DisplayProcessor } from '../types';
import { FunctionalVector } from './FunctionalVector';
/**
 * @public
 */
export declare class FormattedVector<T = any> extends FunctionalVector<string> {
    private source;
    private formatter;
    constructor(source: Vector<T>, formatter: DisplayProcessor);
    get length(): number;
    get(index: number): string;
}
