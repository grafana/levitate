import React, { InputHTMLAttributes, FunctionComponent } from 'react';
import { PopoverContent } from '../Tooltip/Tooltip';
export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onReset'> {
    onReset: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
    isConfigured: boolean;
    label?: string;
    tooltip?: PopoverContent;
    labelWidth?: number;
    inputWidth?: number;
    placeholder?: string;
}
/**
 * Form field that has 2 states configured and not configured. If configured it will not show its contents and adds
 * a reset button that will clear the input and makes it accessible. In non configured state it behaves like normal
 * form field. This is used for passwords or anything that is encrypted on the server and is later returned encrypted
 * to the user (like datasource passwords).
 */
export declare const SecretFormField: FunctionComponent<Props>;
