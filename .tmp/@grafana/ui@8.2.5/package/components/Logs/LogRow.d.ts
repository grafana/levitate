import React from 'react';
import { Field, LinkModel, LogRowModel, LogsSortOrder, TimeZone, DataQueryResponse } from '@grafana/data';
import { RowContextOptions } from './LogRowContextProvider';
export declare const LogRow: React.FunctionComponent<{
    timeZone: TimeZone;
    row: LogRowModel;
    getRowContext: (row: LogRowModel, options?: RowContextOptions | undefined) => Promise<DataQueryResponse>;
    logsSortOrder?: LogsSortOrder | null | undefined;
    wrapLogMessage: boolean;
    prettifyLogMessage: boolean;
    showContextToggle?: ((row?: LogRowModel | undefined) => boolean) | undefined;
    getRows: () => LogRowModel[];
    onClickFilterLabel?: ((key: string, value: string) => void) | undefined;
    onClickFilterOutLabel?: ((key: string, value: string) => void) | undefined;
    showDetectedFields?: string[] | undefined;
    onClickShowDetectedField?: ((key: string) => void) | undefined;
    onClickHideDetectedField?: ((key: string) => void) | undefined;
    showDuplicates: boolean;
    getFieldLinks?: ((field: Field, rowIndex: number) => Array<LinkModel<Field>>) | undefined;
    showLabels: boolean;
    showTime: boolean;
    enableLogDetails: boolean;
    forceEscape?: boolean | undefined;
    onContextClick?: (() => void) | undefined;
}>;