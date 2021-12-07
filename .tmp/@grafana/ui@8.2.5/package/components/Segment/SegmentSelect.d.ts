import React, { HTMLProps } from 'react';
import { SelectableValue } from '@grafana/data';
/** @internal
 * Should be used only internally by Segment/SegmentAsync which can guarantee that SegmentSelect is hidden
 * when a value is selected. See comment below on closeMenuOnSelect()
 */
export interface Props<T> extends Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
    value?: SelectableValue<T>;
    options: Array<SelectableValue<T>>;
    onChange: (item: SelectableValue<T>) => void;
    /**
     * If provided - AsyncSelect will be used allowing to reload options when the value in the input changes
     */
    loadOptions?: (inputValue: string) => Promise<Array<SelectableValue<T>>>;
    onClickOutside: () => void;
    width: number;
    noOptionsMessage?: string;
    allowCustomValue?: boolean;
    /**
     * If true, empty value will be passed to onChange callback otherwise using empty value
     * will work as canceling and using the previous value
     */
    allowEmptyValue?: boolean;
    placeholder?: string;
}
/** @internal */
export declare function SegmentSelect<T>({ value, placeholder, options, onChange, onClickOutside, loadOptions, width: widthPixels, noOptionsMessage, allowCustomValue, allowEmptyValue, ...rest }: React.PropsWithChildren<Props<T>>): JSX.Element;
