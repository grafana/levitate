import React, { FunctionComponent, ReactNode } from 'react';
import { PopoverContent } from '../Tooltip/Tooltip';
interface Props {
    children: ReactNode;
    className?: string;
    htmlFor?: string;
    isFocused?: boolean;
    isInvalid?: boolean;
    tooltip?: PopoverContent;
    width?: number | 'auto';
}
export declare const FormLabel: FunctionComponent<Props>;
export declare const InlineFormLabel: React.FunctionComponent<Props>;
export {};
