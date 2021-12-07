import React, { FunctionComponent } from 'react';
import { GrafanaTheme } from '@grafana/data';
import { PopoverContent } from '../Tooltip/Tooltip';
import { LabelProps } from './Label';
export interface Props extends Omit<LabelProps, 'css' | 'description' | 'category'> {
    /** Content for the labels tooltip. If provided, an info icon with the tooltip content
     * will be displayed */
    tooltip?: PopoverContent;
    /** Custom width for the label */
    width?: number | 'auto';
    /** Make labels's background transparent */
    transparent?: boolean;
    /** @deprecated */
    /** This prop is deprecated and is not used anymore */
    isFocused?: boolean;
    /** @deprecated */
    /** This prop is deprecated and is not used anymore */
    isInvalid?: boolean;
    /** @beta */
    /** Controls which element the InlineLabel should be rendered into */
    as?: React.ElementType;
}
export declare const InlineLabel: FunctionComponent<Props>;
export declare const getInlineLabelStyles: (theme: GrafanaTheme, transparent?: boolean, width?: number | "auto" | undefined) => {
    label: string;
    icon: string;
};
