import { DataQueryResponse, KeyValue, DataQueryError, TimeSeries, TableData, DataFrame, MetricFindValue, DataQuery, DataFrameJSON } from '@grafana/data';
import { FetchError, FetchResponse } from '../services';
/**
 * Single response object from a backend data source. Properties are optional but response should contain at least
 * an error or a some data (but can contain both). Main way to send data is with dataframes attribute as series and
 * tables data attributes are legacy formats.
 *
 * @internal
 */
export interface DataResponse {
    error?: string;
    refId?: string;
    frames?: DataFrameJSON[];
    series?: TimeSeries[];
    tables?: TableData[];
}
/**
 * This is the type of response expected form backend datasource.
 *
 * @internal
 */
export interface BackendDataSourceResponse {
    results: KeyValue<DataResponse>;
}
/**
 * Parse the results from /api/ds/query into a DataQueryResponse
 *
 * @param res - the HTTP response data.
 * @param queries - optional DataQuery array that will order the response based on the order of query refId's.
 *
 * @public
 */
export declare function toDataQueryResponse(res: {
    data: BackendDataSourceResponse | undefined;
} | FetchResponse<BackendDataSourceResponse | undefined> | DataQueryError, queries?: DataQuery[]): DataQueryResponse;
/**
 * Data sources using api/ds/query to test data sources can use this function to
 * handle errors and convert them to TestingStatus object.
 *
 * If possible, this should be avoided in favor of implementing /health endpoint
 * and testing data source with DataSourceWithBackend.testDataSource()
 *
 * Re-thrown errors are handled by testDataSource() in public/app/features/datasources/state/actions.ts
 *
 * @returns {TestingStatus}
 */
export declare function toTestingStatus(err: FetchError): any;
/**
 * Return the first string or non-time field as the value
 *
 * @beta
 */
export declare function frameToMetricFindValue(frame: DataFrame): MetricFindValue[];
