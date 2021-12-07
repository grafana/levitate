import { DataTransformerInfo, MatcherConfig } from '../../types/transformations';
export interface FilterOptions {
    include?: MatcherConfig;
    exclude?: MatcherConfig;
}
export declare const filterFieldsTransformer: DataTransformerInfo<FilterOptions>;
export declare const filterFramesTransformer: DataTransformerInfo<FilterOptions>;
