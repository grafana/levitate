import React, { FormEvent } from 'react';
import { DateTime, GrafanaTheme2, TimeZone } from '@grafana/data';
export declare const getStyles: (theme: GrafanaTheme2, isReversed?: boolean) => {
    container: string;
    modal: string;
    content: string;
    backdrop: string;
};
export interface TimePickerCalendarProps {
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
declare function TimePickerCalendar(props: TimePickerCalendarProps): JSX.Element | null;
declare namespace TimePickerCalendar {
    var displayName: string;
}
declare const _default: React.MemoExoticComponent<typeof TimePickerCalendar>;
export default _default;
