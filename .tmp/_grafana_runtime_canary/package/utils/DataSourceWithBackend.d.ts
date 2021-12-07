import { DataSourceApi, DataQueryRequest, DataQueryResponse, DataSourceInstanceSettings, DataQuery, DataSourceJsonData, ScopedVars, DataFrame, StreamingFrameOptions, DataSourceRef } from '@grafana/data';
import { Observable } from 'rxjs';
/**
 * @internal
 */
export declare const ExpressionDatasourceRef: Readonly<{
    type: string;
    uid: string;
}>;
/**
 * @internal
 */
export declare function isExpressionReference(ref?: DataSourceRef | string | null): boolean;
/**
 * Describes the current health status of a data source plugin.
 *
 * @public
 */
export declare enum HealthStatus {
    Unknown = "UNKNOWN",
    OK = "OK",
    Error = "ERROR"
}
/**
 * Describes the details in the payload returned when checking the health of a data source
 * plugin.
 *
 * If the 'message' key exists, this will be displayed in the error message in DataSourceSettingsPage
 * If the 'verboseMessage' key exists, this will be displayed in the expandable details in the error message in DataSourceSettingsPage
 *
 * @public
 */
export declare type HealthCheckResultDetails = Record<string, any> | undefined;
/**
 * Describes the payload returned when checking the health of a data source
 * plugin.
 *
 * @public
 */
export interface HealthCheckResult {
    status: HealthStatus;
    message: string;
    details: HealthCheckResultDetails;
}
/**
 * Extend this class to implement a data source plugin that is depending on the Grafana
 * backend API.
 *
 * @public
 */
declare class DataSourceWithBackend<TQuery extends DataQuery = DataQuery, TOptions extends DataSourceJsonData = DataSourceJsonData> extends DataSourceApi<TQuery, TOptions> {
    constructor(instanceSettings: DataSourceInstanceSettings<TOptions>);
    /**
     * Ideally final -- any other implementation may not work as expected
     */
    query(request: DataQueryRequest<TQuery>): Observable<DataQueryResponse>;
    /**
     * Apply template variables for explore
     */
    interpolateVariablesInQueries(queries: TQuery[], scopedVars: ScopedVars | {}): TQuery[];
    /**
     * Override to apply template variables.  The result is usually also `TQuery`, but sometimes this can
     * be used to modify the query structure before sending to the backend.
     *
     * NOTE: if you do modify the structure or use template variables, alerting queries may not work
     * as expected
     *
     * @virtual
     */
    applyTemplateVariables(query: TQuery, scopedVars: ScopedVars): Record<string, any>;
    /**
     * Optionally override the streaming behavior
     */
    streamOptionsProvider: StreamOptionsProvider<TQuery>;
    /**
     * Make a GET request to the datasource resource path
     */
    getResource(path: string, params?: any): Promise<any>;
    /**
     * Send a POST request to the datasource resource path
     */
    postResource(path: string, body?: any): Promise<any>;
    /**
     * Run the datasource healthcheck
     */
    callHealthCheck(): Promise<HealthCheckResult>;
    /**
     * Checks the plugin health
     * see public/app/features/datasources/state/actions.ts for what needs to be returned here
     */
    testDatasource(): Promise<any>;
}
/**
 * @internal exported for tests
 */
export declare function toStreamingDataResponse<TQuery extends DataQuery = DataQuery>(rsp: DataQueryResponse, req: DataQueryRequest<TQuery>, getter: (req: DataQueryRequest<TQuery>, frame: DataFrame) => StreamingFrameOptions): Observable<DataQueryResponse>;
/**
 * This allows data sources to customize the streaming connection query
 *
 * @public
 */
export declare type StreamOptionsProvider<TQuery extends DataQuery = DataQuery> = (request: DataQueryRequest<TQuery>, frame: DataFrame) => StreamingFrameOptions;
/**
 * @public
 */
export declare const standardStreamOptionsProvider: StreamOptionsProvider;
export { DataSourceWithBackend };
