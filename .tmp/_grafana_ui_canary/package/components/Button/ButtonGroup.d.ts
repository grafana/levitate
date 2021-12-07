import React, { HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}
export declare const ButtonGroup: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
