import React, { HTMLProps } from 'react';
import { SegmentProps } from '.';
export interface SegmentInputProps<T> extends SegmentProps<T>, Omit<HTMLProps<HTMLInputElement>, 'value' | 'onChange'> {
    value: string | number;
    onChange: (text: string | number) => void;
}
export declare function SegmentInput<T>({ value: initialValue, onChange, Component, className, placeholder, inputPlaceholder, disabled, autofocus, onExpandedChange, ...rest }: React.PropsWithChildren<SegmentInputProps<T>>): JSX.Element;
