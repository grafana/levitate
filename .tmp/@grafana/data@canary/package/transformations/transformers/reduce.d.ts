import { DataTransformerInfo, FieldMatcher, MatcherConfig } from '../../types/transformations';
import { ReducerID } from '../fieldReducer';
import { DataFrame } from '../../types/dataFrame';
export declare enum ReduceTransformerMode {
    SeriesToRows = "seriesToRows",
    ReduceFields = "reduceFields"
}
export interface ReduceTransformerOptions {
    reducers: ReducerID[];
    fields?: MatcherConfig;
    mode?: ReduceTransformerMode;
    includeTimeField?: boolean;
    labelsToFields?: boolean;
}
export declare const reduceTransformer: DataTransformerInfo<ReduceTransformerOptions>;
/**
 * @internal only exported for testing
 */
export declare function reduceSeriesToRows(data: DataFrame[], matcher: FieldMatcher, reducerId: ReducerID[], labelsToFields?: boolean): DataFrame | undefined;
export declare function getDistinctLabelKeys(frames: DataFrame[]): string[];
/**
 * @internal only exported for testing
 */
export declare function mergeResults(data: DataFrame[]): DataFrame | undefined;
/**
 * @internal -- only exported for testing
 */
export declare function reduceFields(data: DataFrame[], matcher: FieldMatcher, reducerId: ReducerID[]): DataFrame[];
