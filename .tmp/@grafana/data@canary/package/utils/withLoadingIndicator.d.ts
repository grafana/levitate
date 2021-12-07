import { Observable } from 'rxjs';
/**
 * @internal
 */
export declare type WithLoadingIndicatorOptions<T> = {
    whileLoading: T;
    source: Observable<T>;
};
/**
 * @internal
 */
export declare function withLoadingIndicator<T>({ whileLoading, source }: WithLoadingIndicatorOptions<T>): Observable<T>;
