import { LogRowModel, LogsSortOrder, DataQueryResponse } from '@grafana/data';
import React from 'react';
export interface RowContextOptions {
    direction?: 'BACKWARD' | 'FORWARD';
    limit?: number;
}
export interface LogRowContextRows {
    before?: string[];
    after?: string[];
}
export interface LogRowContextQueryErrors {
    before?: string;
    after?: string;
}
export interface HasMoreContextRows {
    before: boolean;
    after: boolean;
}
interface LogRowContextProviderProps {
    row: LogRowModel;
    logsSortOrder?: LogsSortOrder | null;
    getRowContext: (row: LogRowModel, options?: RowContextOptions) => Promise<DataQueryResponse>;
    children: (props: {
        result: LogRowContextRows;
        errors: LogRowContextQueryErrors;
        hasMoreContextRows: HasMoreContextRows;
        updateLimit: () => void;
        limit: number;
    }) => JSX.Element;
}
export declare const getRowContexts: (getRowContext: (row: LogRowModel, options?: RowContextOptions | undefined) => Promise<DataQueryResponse>, row: LogRowModel, limit: number, logsSortOrder?: LogsSortOrder | null | undefined) => Promise<{
    data: any[][];
    errors: string[];
}>;
export declare const LogRowContextProvider: React.FunctionComponent<LogRowContextProviderProps>;
export {};
