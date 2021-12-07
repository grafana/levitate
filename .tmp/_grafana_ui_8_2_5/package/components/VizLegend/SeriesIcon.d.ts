import React from 'react';
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
    gradient?: string;
}
export declare const SeriesIcon: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
