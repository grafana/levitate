import React, { HTMLProps } from 'react';
import { SelectableValue } from '@grafana/data';
import { SegmentProps } from './';
export interface SegmentSyncProps<T> extends SegmentProps<T>, Omit<HTMLProps<HTMLDivElement>, 'value' | 'onChange'> {
    value?: T | SelectableValue<T>;
    onChange: (item: SelectableValue<T>) => void;
    options: Array<SelectableValue<T>>;
    inputMinWidth?: number;
}
export declare function Segment<T>({ options, value, onChange, Component, className, allowCustomValue, allowEmptyValue, placeholder, disabled, inputMinWidth, inputPlaceholder, onExpandedChange, autofocus, ...rest }: React.PropsWithChildren<SegmentSyncProps<T>>): JSX.Element;
