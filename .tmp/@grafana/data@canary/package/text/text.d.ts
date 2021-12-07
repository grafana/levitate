export interface TextMatch {
    text: string;
    start: number;
    length: number;
    end: number;
}
/**
 * Adapt findMatchesInText for react-highlight-words findChunks handler.
 * See https://github.com/bvaughn/react-highlight-words#props
 */
export declare function findHighlightChunksInText({ searchWords, textToHighlight, }: {
    searchWords: Array<string | RegExp>;
    textToHighlight: string;
}): TextMatch[];
/**
 * Returns a list of substring regexp matches.
 */
export declare function findMatchesInText(haystack: string, needle: string): TextMatch[];
/**
 * Converts any mode modifiers in the text to the Javascript equivalent flag
 */
export declare function parseFlags(text: string): {
    cleaned: string;
    flags: string;
};
