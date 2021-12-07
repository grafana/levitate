import React from 'react';
import { TimeOption } from '@grafana/data';
interface Props {
    value: TimeOption;
    selected?: boolean;
    onSelect: (option: TimeOption) => void;
    /**
     *  Input identifier. This should be the same for all options in a group.
     */
    name: string;
}
export declare const TimeRangeOption: React.NamedExoticComponent<Props>;
export {};
