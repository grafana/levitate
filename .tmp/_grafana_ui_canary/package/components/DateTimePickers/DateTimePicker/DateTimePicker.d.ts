import { FC, ReactNode } from 'react';
import { DateTime } from '@grafana/data';
export interface Props {
    /** Input date for the component */
    date?: DateTime;
    /** Callback for returning the selected date */
    onChange: (date: DateTime) => void;
    /** label for the input field */
    label?: ReactNode;
    /** Set the latest selectable date */
    maxDate?: Date;
}
export declare const DateTimePicker: FC<Props>;
