import React from 'react';
import { GraphNGProps } from './GraphNG';
import { LegendPlacement } from '@grafana/schema';
import { Story } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.FunctionComponent<{
        fields?: import("./types").XYFieldMatchers | undefined;
        timeZone: string;
        children?: ((builder: import("..").UPlotConfigBuilder, alignedFrame: import("@grafana/data").DataFrame) => React.ReactNode) | undefined;
        legend: import("@grafana/schema").VizLegendOptions;
        height: number;
        width: number;
        timeRange: import("@grafana/data").TimeRange;
        frames: import("@grafana/data").DataFrame[];
        structureRev?: number | undefined;
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
