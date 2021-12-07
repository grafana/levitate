import { HighlightPart } from '../types';
declare type FuzzyMatch = {
    /**
     * Total number of unmatched letters between matched letters
     */
    distance: number;
    ranges: HighlightPart[];
    found: boolean;
};
/**
 * Attempts to do a partial input search, e.g. allowing to search for a text (needle)
 * in another text (stack) by skipping some letters in-between. All letters from
 * the needle must exist in the stack in the same order to find a match.
 *
 * The search is case sensitive. Convert stack and needle to lower case
 * to make it case insensitive.
 *
 * @param stack - main text to be searched
 * @param needle - partial text to find in the stack
 *
 * @internal
 */
export declare function fuzzyMatch(stack: string, needle: string): FuzzyMatch;
export {};
