import { DataFrame, FieldMatcher, Vector } from '../../types';
export declare function pickBestJoinField(data: DataFrame[]): FieldMatcher;
/**
 * @alpha
 */
export interface JoinOptions {
    /**
     * The input fields
     */
    frames: DataFrame[];
    /**
     * The field to join -- frames that do not have this field will be droppped
     */
    joinBy?: FieldMatcher;
    /**
     * Optionally filter the non-join fields
     */
    keep?: FieldMatcher;
    /**
     * When the result is a single frame, this will to a quick check to see if the values are sorted,
     * and sort if necessary.  If the first/last values are in order the whole vector is assumed to be
     * sorted
     */
    enforceSort?: boolean;
    /**
     * @internal -- used when we need to keep a reference to the original frame/field index
     */
    keepOriginIndices?: boolean;
}
/**
 * This will return a single frame joined by the first matching field.  When a join field is not specified,
 * the default will use the first time field
 */
export declare function outerJoinDataFrames(options: JoinOptions): DataFrame | undefined;
export declare type AlignedData = [number[], ...Array<Array<number | null | undefined>>];
export declare function join(tables: AlignedData[], nullModes?: number[][]): number[][];
export declare function isLikelyAscendingVector(data: Vector): boolean;
