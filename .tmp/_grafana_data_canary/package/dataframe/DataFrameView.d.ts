import { DataFrame } from '../types/dataFrame';
import { DisplayProcessor } from '../types';
import { FunctionalVector } from '../vector/FunctionalVector';
/**
 * This abstraction will present the contents of a DataFrame as if
 * it were a well typed javascript object Vector.
 *
 * @remarks
 * The {@link DataFrameView.get} is optimized for use in a loop and will return same object.
 * See function for more details.
 *
 * @typeParam T - Type of object stored in the DataFrame.
 * @beta
 */
export declare class DataFrameView<T = any> extends FunctionalVector<T> {
    private data;
    private index;
    private obj;
    constructor(data: DataFrame);
    get dataFrame(): DataFrame;
    get length(): number;
    /**
     * Helper function to return the {@link DisplayProcessor} for a given field column.
     * @param colIndex - the field column index for the data frame.
     */
    getFieldDisplayProcessor(colIndex: number): DisplayProcessor | undefined;
    /**
     * The contents of the object returned from this function
     * are optimized for use in a loop. All calls return the same object
     * but the index has changed.
     *
     * @example
     * ```typescript
     *   // `first`, `second` and `third` will all point to the same contents at index 2:
     *   const first = view.get(0);
     *   const second = view.get(1);
     *   const third = view.get(2);
     *
     *   // If you need three different objects, consider something like:
     *   const first = { ...view.get(0) };
     *   const second = { ...view.get(1) };
     *   const third = { ...view.get(2) };
     * ```
     * @param idx - The index of the object you currently are inspecting
     */
    get(idx: number): T;
    toArray(): T[];
}
