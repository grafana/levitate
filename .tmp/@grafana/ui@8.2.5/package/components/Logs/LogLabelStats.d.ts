import React from 'react';
import { LogLabelStatsModel } from '@grafana/data';
export declare const LogLabelStats: React.FunctionComponent<{
    value: string;
    stats: LogLabelStatsModel[];
    label: string;
    rowCount: number;
    isLabel?: boolean | undefined;
}>;
