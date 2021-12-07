import React, { FormEvent } from 'react';
import { DateTime, GrafanaTheme2, TimeZone } from '@grafana/data';
export declare const getStyles: (this: any, theme: GrafanaTheme2, isReversed?: any) => {
    container: string;
    modal: string;
    content: string;
    backdrop: string;
};
export declare const getBodyStyles: (theme: GrafanaTheme2) => {
    title: string;
    body: string;
};
interface Props {
    isOpen: boolean;
    from: DateTime;
    to: DateTime;
    onClose: () => void;
    onApply: (e: FormEvent<HTMLButtonElement>) => void;
    onChange: (from: DateTime, to: DateTime) => void;
    isFullscreen: boolean;
    timeZone?: TimeZone;
    isReversed?: boolean;
}
export declare const TimePickerCalendar: React.NamedExoticComponent<Props>;
export declare const Body: React.NamedExoticComponent<Props>;
export declare function inputToValue(from: DateTime, to: DateTime, invalidDateDefault?: Date): Date[];
export {};
