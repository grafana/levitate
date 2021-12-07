import { DataTransformerInfo } from '../../types/transformations';
import { ReducerID } from '../fieldReducer';
export declare enum GroupByOperationID {
    aggregate = "aggregate",
    groupBy = "groupby"
}
export interface GroupByFieldOptions {
    aggregations: ReducerID[];
    operation: GroupByOperationID | null;
}
export interface GroupByTransformerOptions {
    fields: Record<string, GroupByFieldOptions>;
}
export declare const groupByTransformer: DataTransformerInfo<GroupByTransformerOptions>;
