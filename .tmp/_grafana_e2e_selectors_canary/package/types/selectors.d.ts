/**
 * A string selector
 *
 * @alpha
 */
export declare type StringSelector = string;
/**
 * A function selector with an argument
 *
 * @alpha
 */
export declare type FunctionSelector = (id: string) => string;
/**
 * A function selector without argument
 *
 * @alpha
 */
export declare type CssSelector = () => string;
/**
 * @alpha
 */
export interface Selectors {
    [key: string]: StringSelector | FunctionSelector | CssSelector | UrlSelector | Selectors;
}
/**
 * @alpha
 */
export declare type E2ESelectors<S extends Selectors> = {
    [P in keyof S]: S[P];
};
/**
 * @alpha
 */
export interface UrlSelector extends Selectors {
    url: string | FunctionSelector;
}
