import { DataTransformerInfo } from '../../types/transformations';
import { DataFrame } from '../../types';
export interface SortByField {
    field: string;
    desc?: boolean;
    index?: number;
}
export interface SortByTransformerOptions {
    sort: SortByField[];
}
export declare const sortByTransformer: DataTransformerInfo<SortByTransformerOptions>;
export declare function sortDataFrames(data: DataFrame[], sort: SortByField[]): DataFrame[];
