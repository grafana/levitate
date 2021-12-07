import React from 'react';
import { Dimensions, TimeZone } from '@grafana/data';
import { FlotPosition } from '../Graph/types';
import { TooltipDisplayMode } from '@grafana/schema';
export declare type ActiveDimensions<T extends Dimensions = any> = {
    [key in keyof T]: [number, number | undefined] | null;
};
export interface VizTooltipContentProps<T extends Dimensions = any> {
    dimensions: T;
    activeDimensions?: ActiveDimensions<T>;
    timeZone?: TimeZone;
    pos: FlotPosition;
    mode: TooltipDisplayMode;
}
export interface VizTooltipProps {
    /** Element used as tooltips content */
    content?: React.ReactElement<any>;
    /** Optional component to be used as a tooltip content */
    tooltipComponent?: React.ComponentType<VizTooltipContentProps>;
    /** x/y position relative to the window */
    position?: {
        x: number;
        y: number;
    };
    /** x/y offset relative to tooltip origin element, i.e. graph's datapoint */
    offset?: {
        x: number;
        y: number;
    };
    mode?: TooltipDisplayMode;
}
/**
 * @public
 */
export declare const VizTooltip: React.FC<VizTooltipProps>;
