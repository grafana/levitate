import React from 'react';
import { Field, LinkModel, LogLabelStatsModel } from '@grafana/data';
import { Themeable2 } from '../../types/theme';
export interface Props extends Themeable2 {
    parsedValue: string;
    parsedKey: string;
    wrapLogMessage?: boolean;
    isLabel?: boolean;
    onClickFilterLabel?: (key: string, value: string) => void;
    onClickFilterOutLabel?: (key: string, value: string) => void;
    links?: Array<LinkModel<Field>>;
    getStats: () => LogLabelStatsModel[] | null;
    showDetectedFields?: string[];
    onClickShowDetectedField?: (key: string) => void;
    onClickHideDetectedField?: (key: string) => void;
}
export declare const LogDetailsRow: React.FunctionComponent<{
    links?: LinkModel<Field<any, import("@grafana/data").Vector<any>>>[] | undefined;
    wrapLogMessage?: boolean | undefined;
    isLabel?: boolean | undefined;
    parsedValue: string;
    parsedKey: string;
    onClickFilterLabel?: ((key: string, value: string) => void) | undefined;
    onClickFilterOutLabel?: ((key: string, value: string) => void) | undefined;
    getStats: () => LogLabelStatsModel[] | null;
    showDetectedFields?: string[] | undefined;
    onClickShowDetectedField?: ((key: string) => void) | undefined;
    onClickHideDetectedField?: ((key: string) => void) | undefined;
}>;
