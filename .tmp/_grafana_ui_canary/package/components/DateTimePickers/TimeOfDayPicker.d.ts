import { FC } from 'react';
import { DateTime } from '@grafana/data';
import { FormInputSize } from '../Forms/types';
export interface Props {
    onChange: (value: DateTime) => void;
    value?: DateTime;
    showHour?: boolean;
    showSeconds?: boolean;
    minuteStep?: number;
    size?: FormInputSize;
    disabled?: boolean;
}
export declare const TimeOfDayPicker: FC<Props>;
