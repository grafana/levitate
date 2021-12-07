import React, { PureComponent } from 'react';
import { Placement } from '@popperjs/core';
export interface Props {
    label: string;
    checked: boolean;
    className?: string;
    labelClass?: string;
    switchClass?: string;
    tooltip?: string;
    tooltipPlacement?: Placement;
    transparent?: boolean;
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}
export interface State {
    id: string;
}
export declare class Switch extends PureComponent<Props, State> {
    state: {
        id: string;
    };
    internalOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
