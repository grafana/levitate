import { Labels } from './data';
import { DataFrame } from './dataFrame';
import { DataQuery } from './query';
import { AbsoluteTimeRange } from './time';
import { DataQueryResponse } from './datasource';
/**
 * Mapping of log level abbreviation to canonical log level.
 * Supported levels are reduce to limit color variation.
 */
export declare enum LogLevel {
    emerg = "critical",
    fatal = "critical",
    alert = "critical",
    crit = "critical",
    critical = "critical",
    warn = "warning",
    warning = "warning",
    err = "error",
    eror = "error",
    error = "error",
    info = "info",
    information = "info",
    informational = "info",
    notice = "info",
    dbug = "debug",
    debug = "debug",
    trace = "trace",
    unknown = "unknown"
}
export declare enum LogsMetaKind {
    Number = 0,
    String = 1,
    LabelsMap = 2,
    Error = 3
}
export declare enum LogsSortOrder {
    Descending = "Descending",
    Ascending = "Ascending"
}
export interface LogsMetaItem {
    label: string;
    value: string | number | Labels;
    kind: LogsMetaKind;
}
export interface LogRowModel {
    entryFieldIndex: number;
    rowIndex: number;
    dataFrame: DataFrame;
    duplicates?: number;
    entry: string;
    hasAnsi: boolean;
    hasUnescapedContent: boolean;
    labels: Labels;
    logLevel: LogLevel;
    raw: string;
    searchWords?: string[];
    timeFromNow: string;
    timeEpochMs: number;
    timeEpochNs: string;
    timeLocal: string;
    timeUtc: string;
    uid: string;
    uniqueLabels?: Labels;
}
export interface LogsModel {
    hasUniqueLabels: boolean;
    meta?: LogsMetaItem[];
    rows: LogRowModel[];
    series?: DataFrame[];
    visibleRange?: AbsoluteTimeRange;
    queries?: DataQuery[];
}
export interface LogSearchMatch {
    start: number;
    length: number;
    text: string;
}
export interface LogLabelStatsModel {
    active?: boolean;
    count: number;
    proportion: number;
    value: string;
}
export declare enum LogsDedupStrategy {
    none = "none",
    exact = "exact",
    numbers = "numbers",
    signature = "signature"
}
export interface LogsParser {
    /**
     * Value-agnostic matcher for a field label.
     * Used to filter rows, and first capture group contains the value.
     */
    buildMatcher: (label: string) => RegExp;
    /**
     * Returns all parsable substrings from a line, used for highlighting
     */
    getFields: (line: string) => string[];
    /**
     * Gets the label name from a parsable substring of a line
     */
    getLabelFromField: (field: string) => string;
    /**
     * Gets the label value from a parsable substring of a line
     */
    getValueFromField: (field: string) => string;
    /**
     * Function to verify if this is a valid parser for the given line.
     * The parser accepts the line if it returns true.
     */
    test: (line: string) => boolean;
}
export declare enum LogsDedupDescription {
    none = "No de-duplication",
    exact = "De-duplication of successive lines that are identical, ignoring ISO datetimes.",
    numbers = "De-duplication of successive lines that are identical when ignoring numbers, e.g., IP addresses, latencies.",
    signature = "De-duplication of successive lines that have identical punctuation and whitespace."
}
/**
 * @alpha
 */
export interface DataSourceWithLogsContextSupport {
    /**
     * Retrieve context for a given log row
     */
    getLogRowContext: <TContextQueryOptions extends {}>(row: LogRowModel, options?: TContextQueryOptions) => Promise<DataQueryResponse>;
    showContextToggle(row?: LogRowModel): boolean;
}
/**
 * @alpha
 */
export declare const hasLogsContextSupport: (datasource: any) => datasource is DataSourceWithLogsContextSupport;
