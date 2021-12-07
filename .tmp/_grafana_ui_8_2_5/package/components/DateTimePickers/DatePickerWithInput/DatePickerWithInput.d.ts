/// <reference types="react" />
import { Props as InputProps } from '../../Input/Input';
export declare const formatDate: (date: Date | string) => string;
/** @public */
export interface DatePickerWithInputProps extends Omit<InputProps, 'ref' | 'value' | 'onChange'> {
    value?: Date | string;
    onChange: (value: Date | string) => void;
    /** Hide the calendar when date is selected */
    closeOnSelect?: boolean;
    placeholder?: string;
}
/** @public */
export declare const DatePickerWithInput: ({ value, onChange, closeOnSelect, placeholder, ...rest }: DatePickerWithInputProps) => JSX.Element;
