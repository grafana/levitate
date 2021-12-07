/// <reference types="react" />
import { TooltipProps, PopoverContent } from '../Tooltip/Tooltip';
interface InfoTooltipProps extends Omit<TooltipProps, 'children' | 'content'> {
    children: PopoverContent;
}
export declare const InfoTooltip: ({ children, ...restProps }: InfoTooltipProps) => JSX.Element;
export {};
