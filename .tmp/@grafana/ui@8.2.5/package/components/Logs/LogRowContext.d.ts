import React from 'react';
import { DataQueryError, LogRowModel } from '@grafana/data';
import { LogRowContextRows, LogRowContextQueryErrors, HasMoreContextRows } from './LogRowContextProvider';
interface LogRowContextProps {
    row: LogRowModel;
    context: LogRowContextRows;
    wrapLogMessage: boolean;
    errors?: LogRowContextQueryErrors;
    hasMoreContextRows?: HasMoreContextRows;
    onOutsideClick: () => void;
    onLoadMoreContext: () => void;
}
interface LogRowContextGroupHeaderProps {
    row: LogRowModel;
    rows: Array<string | DataQueryError>;
    onLoadMoreContext: () => void;
    shouldScrollToBottom?: boolean;
    canLoadMoreRows?: boolean;
}
interface LogRowContextGroupProps extends LogRowContextGroupHeaderProps {
    rows: Array<string | DataQueryError>;
    className?: string;
    error?: string;
}
export declare const LogRowContextGroup: React.FunctionComponent<LogRowContextGroupProps>;
export declare const LogRowContext: React.FunctionComponent<LogRowContextProps>;
export {};
