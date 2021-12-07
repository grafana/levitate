import { FC } from 'react';
import { PopoverContent } from '../Tooltip/Tooltip';
import { FieldProps } from './Field';
export interface Props extends Omit<FieldProps, 'css' | 'horizontal' | 'description' | 'error'> {
    /** Content for the label's tooltip */
    tooltip?: PopoverContent;
    /** Custom width for the label as a multiple of 8px */
    labelWidth?: number | 'auto';
    /** Make the field's child to fill the width of the row. Equivalent to setting `flex-grow:1` on the field */
    grow?: boolean;
    /** Make field's background transparent */
    transparent?: boolean;
    htmlFor?: string;
}
export declare const InlineField: FC<Props>;
