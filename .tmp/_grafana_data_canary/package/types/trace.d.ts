/**
 * Type representing a tag in a trace span or fields of a log.
 */
export declare type TraceKeyValuePair<T = any> = {
    key: string;
    value: T;
};
/**
 * Type representing a log in a span.
 */
export declare type TraceLog = {
    timestamp: number;
    fields: TraceKeyValuePair[];
};
/**
 * This describes the structure of the dataframe that should be returned from a tracing data source to show trace
 * in a TraceView component.
 */
export interface TraceSpanRow {
    traceID: string;
    spanID: string;
    parentSpanID: string | undefined;
    operationName: string;
    serviceName: string;
    serviceTags: TraceKeyValuePair[];
    startTime: number;
    duration: number;
    logs?: TraceLog[];
    tags?: TraceKeyValuePair[];
    warnings?: string[];
    stackTraces?: string[];
    errorIconColor?: string;
}
