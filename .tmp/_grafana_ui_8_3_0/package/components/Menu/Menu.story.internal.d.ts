import React from 'react';
import { Story } from '@storybook/react';
import { MenuProps } from './Menu';
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
    argTypes: {
        items: {
            control: {
                disable: boolean;
            };
        };
        icon: {
            control: {
                type: string;
            };
        };
    };
    parameters: {
        knobs: {
            disabled: boolean;
        };
        controls: {
            disabled: boolean;
        };
        actions: {
            disabled: boolean;
        };
    };
};
export default _default;
export declare const Simple: Story<MenuProps>;
