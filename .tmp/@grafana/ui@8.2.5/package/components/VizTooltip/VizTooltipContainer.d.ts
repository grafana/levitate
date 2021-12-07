import React, { HTMLAttributes } from 'react';
/**
 * @public
 */
export interface VizTooltipContainerProps extends HTMLAttributes<HTMLDivElement> {
    position: {
        x: number;
        y: number;
    };
    offset: {
        x: number;
        y: number;
    };
    children?: React.ReactNode;
}
/**
 * @public
 */
export declare const VizTooltipContainer: React.FC<VizTooltipContainerProps>;
