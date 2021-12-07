import { HTMLAttributes, ReactNode } from 'react';
/**
 * @public
 */
export interface CardInnerProps {
    href?: string;
    children?: ReactNode;
}
/**
 * @public
 */
export interface CardContainerProps extends HTMLAttributes<HTMLOrSVGElement>, CardInnerProps {
    /** Disable pointer events for the Card, e.g. click events */
    disableEvents?: boolean;
    /** No style change on hover */
    disableHover?: boolean;
    /** Custom container styles */
    className?: string;
}
export declare const CardContainer: ({ href, children, disableEvents, disableHover, className, ...props }: CardContainerProps) => JSX.Element;
