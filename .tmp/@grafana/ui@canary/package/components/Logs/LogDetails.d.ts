import React from 'react';
import { Field, LinkModel, LogRowModel } from '@grafana/data';
import { Themeable2 } from '../../types/theme';
export interface Props extends Themeable2 {
    row: LogRowModel;
    showDuplicates: boolean;
    getRows: () => LogRowModel[];
    wrapLogMessage: boolean;
    className?: string;
    hasError?: boolean;
    onClickFilterLabel?: (key: string, value: string) => void;
    onClickFilterOutLabel?: (key: string, value: string) => void;
    getFieldLinks?: (field: Field, rowIndex: number) => Array<LinkModel<Field>>;
    showDetectedFields?: string[];
    onClickShowDetectedField?: (key: string) => void;
    onClickHideDetectedField?: (key: string) => void;
}
export declare const LogDetails: React.FunctionComponent<{
    className?: string | undefined;
    row: LogRowModel;
    wrapLogMessage: boolean;
    getRows: () => LogRowModel[];
    onClickFilterLabel?: ((key: string, value: string) => void) | undefined;
    onClickFilterOutLabel?: ((key: string, value: string) => void) | undefined;
    showDetectedFields?: string[] | undefined;
    onClickShowDetectedField?: ((key: string) => void) | undefined;
    onClickHideDetectedField?: ((key: string) => void) | undefined;
    showDuplicates: boolean;
    hasError?: boolean | undefined;
    getFieldLinks?: ((field: Field, rowIndex: number) => Array<LinkModel<Field>>) | undefined;
}>;
