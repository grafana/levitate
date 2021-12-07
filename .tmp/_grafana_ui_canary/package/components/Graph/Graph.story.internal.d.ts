import { TooltipDisplayMode } from '@grafana/schema';
import { GraphSeriesXY } from '@grafana/data';
import { Story } from '@storybook/react';
import { GraphProps, Graph } from './Graph';
declare const _default: {
    title: string;
    component: typeof Graph;
    decorators: ((story: import("../..").RenderFunction) => JSX.Element)[];
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    args: {
        series: GraphSeriesXY[];
        height: number;
        width: number;
        timeRange: {
            from: import("@grafana/data").DateTime;
            to: import("@grafana/data").DateTime;
            raw: {
                from: import("@grafana/data").DateTime;
                to: import("@grafana/data").DateTime;
            };
        };
        timeZone: string;
        tooltipMode: string;
    };
    argTypes: {
        tooltipMode: {
            control: {
                type: string;
                options: string[];
            };
        };
        timeZone: {
            control: {
                type: string;
                options: string[];
            };
        };
        width: {
            control: {
                type: string;
                min: number;
                max: number;
            };
        };
        height: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
        };
        lineWidth: {
            control: {
                type: string;
                min: number;
                max: number;
            };
        };
    };
};
export default _default;
export declare const WithTooltip: Story<GraphProps & {
    tooltipMode: TooltipDisplayMode;
}>;
export declare const WithCustomTooltip: Story<GraphProps & {
    tooltipMode: TooltipDisplayMode;
}>;
