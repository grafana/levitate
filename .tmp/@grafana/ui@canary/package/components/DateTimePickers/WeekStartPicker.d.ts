import React from 'react';
export interface Props {
    onChange: (weekStart: string) => void;
    value: string;
    width?: number;
    autoFocus?: boolean;
    onBlur?: () => void;
    includeInternal?: boolean;
    disabled?: boolean;
    inputId?: string;
}
export declare const WeekStartPicker: React.FC<Props>;
