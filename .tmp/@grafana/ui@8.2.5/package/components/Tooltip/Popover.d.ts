import React, { PureComponent } from 'react';
import { Placement, VirtualElement } from '@popperjs/core';
import { PopperArrowProps } from 'react-popper';
import { PopoverContent } from './Tooltip';
export declare type RenderPopperArrowFn = (props: {
    arrowProps: PopperArrowProps;
    placement: string;
}) => JSX.Element;
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    show: boolean;
    placement?: Placement;
    content: PopoverContent;
    referenceElement: HTMLElement | VirtualElement;
    wrapperClassName?: string;
    renderArrow?: RenderPopperArrowFn;
}
declare class Popover extends PureComponent<Props> {
    render(): JSX.Element;
}
export { Popover };
