import React, { ReactNode } from 'react';
import { TimeOption } from '@grafana/data';
interface Props {
    title?: string;
    options: TimeOption[];
    value?: TimeOption;
    onChange: (option: TimeOption) => void;
    placeholderEmpty?: ReactNode;
}
export declare const TimeRangeList: React.FC<Props>;
export {};
