import React from 'react';
import { ColorPickerProps } from './ColorPickerPopover';
interface ColorInputState {
    previousColor: string;
    value: string;
}
interface ColorInputProps extends ColorPickerProps {
    style?: React.CSSProperties;
    className?: string;
}
declare class ColorInput extends React.PureComponent<ColorInputProps, ColorInputState> {
    constructor(props: ColorInputProps);
    static getDerivedStateFromProps(props: ColorPickerProps, state: ColorInputState): ColorInputState;
    updateColor: (color: string) => void;
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    render(): JSX.Element;
}
export default ColorInput;
