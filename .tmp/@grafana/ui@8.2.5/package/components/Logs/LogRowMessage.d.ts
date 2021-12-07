import React from 'react';
import { LogRowModel } from '@grafana/data';
import { LogRowContextQueryErrors, HasMoreContextRows, LogRowContextRows } from './LogRowContextProvider';
export declare const MAX_CHARACTERS = 100000;
export declare const LogRowMessage: React.FunctionComponent<{
    context?: LogRowContextRows | undefined;
    row: LogRowModel;
    hasMoreContextRows?: HasMoreContextRows | undefined;
    errors?: LogRowContextQueryErrors | undefined;
    wrapLogMessage: boolean;
    contextIsOpen: boolean;
    prettifyLogMessage: boolean;
    showContextToggle?: ((row?: LogRowModel | undefined) => boolean) | undefined;
    getRows: () => LogRowModel[];
    onToggleContext: () => void;
    updateLimit?: (() => void) | undefined;
}>;
