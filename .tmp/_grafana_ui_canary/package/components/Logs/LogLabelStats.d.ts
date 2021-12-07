import React from 'react';
import { LogLabelStatsModel } from '@grafana/data';
export declare const LogLabelStats: React.FunctionComponent<{
    value: string;
    label: string;
    stats: LogLabelStatsModel[];
    rowCount: number;
    isLabel?: boolean | undefined;
}>;
