/// <reference types="react" />
import { SelectableValue } from '@grafana/data';
import { RadioButtonSize } from './RadioButton';
export interface RadioButtonGroupProps<T> {
    value?: T;
    disabled?: boolean;
    disabledOptions?: T[];
    options: Array<SelectableValue<T>>;
    onChange?: (value: T) => void;
    size?: RadioButtonSize;
    fullWidth?: boolean;
    className?: string;
}
export declare function RadioButtonGroup<T>({ options, value, onChange, disabled, disabledOptions, size, className, fullWidth, }: RadioButtonGroupProps<T>): JSX.Element;
export declare namespace RadioButtonGroup {
    var displayName: string;
}
