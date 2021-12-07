import { DataQueryError } from '@grafana/data';
/**
 * Convert an object into a DataQueryError -- if this is an HTTP response,
 * it will put the correct values in the error field
 *
 * @public
 */
export declare function toDataQueryError(err: DataQueryError | string | Object): DataQueryError;
