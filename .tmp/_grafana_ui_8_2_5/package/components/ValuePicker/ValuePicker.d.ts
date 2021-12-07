/// <reference types="react" />
import { IconName } from '../../types';
import { SelectableValue } from '@grafana/data';
import { ButtonVariant } from '../Button';
import { ComponentSize } from '../../types/size';
export interface ValuePickerProps<T> {
    /** Label to display on the picker button */
    label: string;
    /** Icon to display on the picker button */
    icon?: IconName;
    /** ValuePicker options  */
    options: Array<SelectableValue<T>>;
    /** Callback to handle selected option */
    onChange: (value: SelectableValue<T>) => void;
    /** Which ButtonVariant to render */
    variant?: ButtonVariant;
    /** Size of button  */
    size?: ComponentSize;
    /** Should the picker cover the full width of its parent */
    isFullWidth?: boolean;
    /** Control where the menu is rendered */
    menuPlacement?: 'auto' | 'bottom' | 'top';
}
export declare function ValuePicker<T>({ label, icon, options, onChange, variant, size, isFullWidth, menuPlacement, }: ValuePickerProps<T>): JSX.Element;
