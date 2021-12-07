import React from 'react';
import { GraphNGProps } from './GraphNG';
import { LegendPlacement } from '@grafana/schema';
import { Story } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<{
        timeZone: string;
        options?: Record<string, any> | undefined;
        fields?: import("./types").XYFieldMatchers | undefined;
        children?: ((builder: import("..").UPlotConfigBuilder, alignedFrame: import("@grafana/data").DataFrame) => React.ReactNode) | undefined;
        legend: import("@grafana/schema").VizLegendOptions;
        height: number;
        width: number;
        timeRange: import("@grafana/data").TimeRange;
        frames: import("@grafana/data").DataFrame[];
        structureRev?: number | undefined;
        renderers?: import("../uPlot/config/UPlotConfigBuilder").Renderers | undefined;
        tweakScale?: ((opts: import("../uPlot/config/UPlotScaleBuilder").ScaleProps, forField: import("@grafana/data").Field<any, import("@grafana/data").Vector<any>>) => import("../uPlot/config/UPlotScaleBuilder").ScaleProps) | undefined;
        tweakAxis?: ((opts: import("../uPlot/config/UPlotAxisBuilder").AxisProps, forField: import("@grafana/data").Field<any, import("@grafana/data").Vector<any>>) => import("../uPlot/config/UPlotAxisBuilder").AxisProps) | undefined;
        onLegendClick?: ((event: import("./types").GraphNGLegendEvent) => void) | undefined;
        preparePlotFrame?: ((frames: import("@grafana/data").DataFrame[], dimFields: import("./types").XYFieldMatchers) => import("@grafana/data").DataFrame) | undefined;
    }>;
    decorators: ((story: import("../..").RenderFunction) => JSX.Element)[];
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    argTypes: {
        legendDisplayMode: {
            control: {
                type: string;
                options: string[];
            };
        };
        placement: {
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
            };
        };
    };
};
export default _default;
interface StoryProps extends GraphNGProps {
    legendDisplayMode: string;
    placement: LegendPlacement;
    unit: string;
}
export declare const Lines: Story<StoryProps>;
