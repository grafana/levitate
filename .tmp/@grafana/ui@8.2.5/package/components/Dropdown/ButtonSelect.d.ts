import { HTMLAttributes } from 'react';
import { PopoverContent } from '../Tooltip/Tooltip';
import { SelectableValue } from '@grafana/data';
import { ToolbarButtonVariant } from '../Button';
export interface Props<T> extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
    options: Array<SelectableValue<T>>;
    value?: SelectableValue<T>;
    onChange: (item: SelectableValue<T>) => void;
    tooltipContent?: PopoverContent;
    narrow?: boolean;
    variant?: ToolbarButtonVariant;
}
export declare const ButtonSelect: {
    <T>(props: Props<T>): JSX.Element;
    displayName: string;
};
