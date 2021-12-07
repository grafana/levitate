import { DataTransformerInfo, MatcherConfig } from '../../types/transformations';
export declare enum FilterByValueType {
    exclude = "exclude",
    include = "include"
}
export declare enum FilterByValueMatch {
    all = "all",
    any = "any"
}
export interface FilterByValueFilter {
    fieldName: string;
    config: MatcherConfig;
}
export interface FilterByValueTransformerOptions {
    filters: FilterByValueFilter[];
    type: FilterByValueType;
    match: FilterByValueMatch;
}
export declare const filterByValueTransformer: DataTransformerInfo<FilterByValueTransformerOptions>;
