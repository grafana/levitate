import { DataTransformerInfo } from '../../types/transformations';
import { RegexpOrNamesMatcherOptions } from '../matchers/nameMatcher';
export interface FilterFieldsByNameTransformerOptions {
    include?: RegexpOrNamesMatcherOptions;
    exclude?: RegexpOrNamesMatcherOptions;
}
export declare const filterFieldsByNameTransformer: DataTransformerInfo<FilterFieldsByNameTransformerOptions>;
