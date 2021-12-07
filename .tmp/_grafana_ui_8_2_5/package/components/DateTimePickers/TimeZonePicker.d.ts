import React from 'react';
import { TimeZone } from '@grafana/data';
export interface Props {
    onChange: (timeZone?: TimeZone) => void;
    value?: TimeZone;
    width?: number;
    autoFocus?: boolean;
    onBlur?: () => void;
    includeInternal?: boolean;
    disabled?: boolean;
}
export declare const TimeZonePicker: React.FC<Props>;
