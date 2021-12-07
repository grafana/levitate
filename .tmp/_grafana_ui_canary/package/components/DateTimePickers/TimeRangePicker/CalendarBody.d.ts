import { TimePickerCalendarProps } from './TimePickerCalendar';
import { GrafanaTheme2, DateTime } from '@grafana/data';
export declare function Body({ onChange, from, to, timeZone }: TimePickerCalendarProps): JSX.Element;
export declare namespace Body {
    var displayName: string;
}
export declare function inputToValue(from: DateTime, to: DateTime, invalidDateDefault?: Date): Date[];
export declare const getBodyStyles: (theme: GrafanaTheme2) => {
    title: string;
    body: string;
};
