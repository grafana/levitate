import { LogLevel, LogRowModel, LogLabelStatsModel, LogsParser, LogsModel, LogsSortOrder } from '../types/logs';
import { DataFrame } from '../types/index';
/**
 * Returns the log level of a log line.
 * Parse the line for level words. If no level is found, it returns `LogLevel.unknown`.
 *
 * Example: `getLogLevel('WARN 1999-12-31 this is great') // LogLevel.warn`
 */
export declare function getLogLevel(line: string): LogLevel;
export declare function getLogLevelFromKey(key: string | number): LogLevel;
export declare function addLogLevelToSeries(series: DataFrame, lineIndex: number): DataFrame;
export declare const LogsParsers: {
    [name: string]: LogsParser;
};
export declare function calculateFieldStats(rows: LogRowModel[], extractor: RegExp): LogLabelStatsModel[];
export declare function calculateLogsLabelStats(rows: LogRowModel[], label: string): LogLabelStatsModel[];
export declare function calculateStats(values: any[]): LogLabelStatsModel[];
export declare function getParser(line: string): LogsParser | undefined;
export declare const sortInAscendingOrder: (a: LogRowModel, b: LogRowModel) => 0 | 1 | -1;
export declare const sortInDescendingOrder: (a: LogRowModel, b: LogRowModel) => 0 | 1 | -1;
export declare const sortLogsResult: (logsResult: LogsModel | null, sortOrder: LogsSortOrder) => LogsModel;
export declare const sortLogRows: (logRows: LogRowModel[], sortOrder: LogsSortOrder) => LogRowModel[];
export declare const checkLogsError: (logRow: LogRowModel) => {
    hasError: boolean;
    errorMessage?: string;
};
export declare const escapeUnescapedString: (string: string) => string;
