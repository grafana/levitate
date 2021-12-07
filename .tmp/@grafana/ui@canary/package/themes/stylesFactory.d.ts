/**
 * @public
 * @deprecated use useStyles hook
 *  Creates memoized version of styles creator
 * @param stylesCreator function accepting dependencies based on which styles are created
 */
export declare function stylesFactory<ResultFn extends (this: any, ...newArgs: any[]) => ReturnType<ResultFn>>(stylesCreator: ResultFn): import("memoize-one").MemoizedFn<ResultFn>;
