import React from 'react';
import { Story } from '@storybook/react';
import { GraphWithLegendProps } from './GraphWithLegend';
declare const _default: {
    title: string;
    component: React.FunctionComponent<GraphWithLegendProps>;
    decorator: ((story: import("../..").RenderFunction) => JSX.Element)[];
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    argTypes: {
        displayMode: {
            control: {
                type: string;
            };
            options: string[];
        };
        placement: {
            control: {
                type: string;
            };
            options: string[];
        };
        rightAxisSeries: {
            name: string;
        };
        timeZone: {
            control: {
                type: string;
            };
            options: string[];
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
interface StoryProps extends GraphWithLegendProps {
    rightAxisSeries: string;
    displayMode: string;
}
export declare const WithLegend: Story<StoryProps>;
