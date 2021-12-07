/**
 * @preserve jquery-param (c) 2015 KNOWLEDGECODE | MIT
 */
import { ExploreUrlState } from '../types/explore';
/**
 * Type to represent the value of a single query variable.
 *
 * @public
 */
export declare type UrlQueryValue = string | number | boolean | string[] | number[] | boolean[] | undefined | null;
/**
 * Type to represent the values parsed from the query string.
 *
 * @public
 */
export declare type UrlQueryMap = Record<string, UrlQueryValue>;
declare function renderUrl(path: string, query: UrlQueryMap | undefined): string;
declare function toUrlParams(a: any): string;
declare function appendQueryToUrl(url: string, stringToAppend: string): string;
/**
 * Return search part (as object) of current url
 */
declare function getUrlSearchParams(): UrlQueryMap;
/**
 * Parses an escaped url query string into key-value pairs.
 * Attribution: Code dervived from https://github.com/angular/angular.js/master/src/Angular.js#L1396
 * @returns {Object.<string,boolean|Array>}
 */
export declare function parseKeyValue(keyValue: string): any;
export declare const urlUtil: {
    renderUrl: typeof renderUrl;
    toUrlParams: typeof toUrlParams;
    appendQueryToUrl: typeof appendQueryToUrl;
    getUrlSearchParams: typeof getUrlSearchParams;
    parseKeyValue: typeof parseKeyValue;
};
export declare function serializeStateToUrlParam(urlState: ExploreUrlState, compact?: boolean): string;
export {};
