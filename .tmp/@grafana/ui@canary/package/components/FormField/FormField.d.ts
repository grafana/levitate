import React, { InputHTMLAttributes, FunctionComponent } from 'react';
import { PopoverContent } from '../Tooltip/Tooltip';
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    tooltip?: PopoverContent;
    labelWidth?: number;
    inputWidth?: number | null;
    inputEl?: React.ReactNode;
}
/**
 * Default form field including label used in Grafana UI. Default input element is simple <input />. You can also pass
 * custom inputEl if required in which case inputWidth and inputProps are ignored.
 */
export declare const FormField: FunctionComponent<Props>;
