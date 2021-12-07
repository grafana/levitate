import { FunctionComponent } from 'react';
import { ThemeVizHue } from '@grafana/data';
import { Property } from 'csstype';
interface NamedColorsGroupProps {
    hue: ThemeVizHue;
    selectedColor?: Property.Color;
    onColorSelect: (colorName: string) => void;
    key?: string;
}
declare const NamedColorsGroup: FunctionComponent<NamedColorsGroupProps>;
export default NamedColorsGroup;
