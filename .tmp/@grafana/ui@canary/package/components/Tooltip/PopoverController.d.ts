import React from 'react';
import { Placement } from '@popperjs/core';
import { PopoverContent } from './Tooltip';
export interface UsingPopperProps {
    show?: boolean;
    placement?: TooltipPlacement;
    content: PopoverContent;
    children: JSX.Element;
}
export declare type TooltipPlacement = 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start';
declare type PopperControllerRenderProp = (showPopper: () => void, hidePopper: () => void, popperProps: {
    show: boolean;
    placement: Placement;
    content: PopoverContent;
}) => JSX.Element;
interface Props {
    placement?: Placement;
    content: PopoverContent;
    className?: string;
    children: PopperControllerRenderProp;
    hideAfter?: number;
}
interface State {
    show: boolean;
}
declare class PopoverController extends React.Component<Props, State> {
    private hideTimeout;
    state: {
        show: boolean;
    };
    showPopper: () => void;
    hidePopper: () => void;
    render(): JSX.Element;
}
export { PopoverController };
