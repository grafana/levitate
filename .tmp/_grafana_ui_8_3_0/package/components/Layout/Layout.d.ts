import React, { HTMLProps } from 'react';
declare enum Orientation {
    Horizontal = 0,
    Vertical = 1
}
declare type Spacing = 'none' | 'xs' | 'sm' | 'md' | 'lg';
declare type Justify = 'flex-start' | 'flex-end' | 'space-between' | 'center';
declare type Align = 'normal' | 'flex-start' | 'flex-end' | 'center';
export interface LayoutProps extends Omit<HTMLProps<HTMLDivElement>, 'align' | 'children' | 'wrap'> {
    children: React.ReactNode[] | React.ReactNode;
    orientation?: Orientation;
    spacing?: Spacing;
    justify?: Justify;
    align?: Align;
    width?: string;
    wrap?: boolean;
}
export interface ContainerProps {
    padding?: Spacing;
    margin?: Spacing;
    grow?: number;
    shrink?: number;
}
export declare const Layout: React.FC<LayoutProps>;
export declare const HorizontalGroup: React.FC<Omit<LayoutProps, 'orientation'>>;
export declare const VerticalGroup: React.FC<Omit<LayoutProps, 'orientation' | 'wrap'>>;
export declare const Container: React.FC<ContainerProps>;
export {};
