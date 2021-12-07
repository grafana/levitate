import React from 'react';
import { GrafanaTheme2 } from '@grafana/data';
/** @public */
export interface DatePickerProps {
    isOpen?: boolean;
    onClose: () => void;
    onChange: (value: Date) => void;
    value?: Date;
}
/** @public */
export declare const DatePicker: React.NamedExoticComponent<DatePickerProps>;
export declare const getStyles: (theme: GrafanaTheme2) => {
    modal: string;
};
