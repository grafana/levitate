import { SearchFunction } from '../types';
/**
 * List of auto-complete search function used by SuggestionsPlugin.handleTypeahead()
 * @alpha
 */
export declare enum SearchFunctionType {
    Word = "Word",
    Prefix = "Prefix",
    Fuzzy = "Fuzzy"
}
/**
 * @internal
 */
export declare const SearchFunctionMap: {
    Word: SearchFunction;
    Prefix: SearchFunction;
    Fuzzy: SearchFunction;
};
