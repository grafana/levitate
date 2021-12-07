import React, { ButtonHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/css';
import { IconName } from '../../types/icon';
import { GrafanaTheme2 } from '@grafana/data';
import { ComponentSize } from '../../types/size';
export declare type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'link';
export declare const allButtonVariants: ButtonVariant[];
export declare type ButtonFill = 'solid' | 'outline' | 'text';
export declare const allButtonFills: ButtonFill[];
declare type CommonProps = {
    size?: ComponentSize;
    variant?: ButtonVariant;
    fill?: ButtonFill;
    icon?: IconName;
    className?: string;
    children?: React.ReactNode;
    fullWidth?: boolean;
};
export declare type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Button: React.ForwardRefExoticComponent<CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
export declare const LinkButton: React.ForwardRefExoticComponent<CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
export interface StyleProps {
    size: ComponentSize;
    variant: ButtonVariant;
    fill?: ButtonFill;
    iconOnly?: boolean;
    theme: GrafanaTheme2;
    fullWidth?: boolean;
    narrow?: boolean;
}
export declare const getButtonStyles: (props: StyleProps) => {
    button: string;
    disabled: string;
    img: string;
    icon: string;
    content: string;
};
export declare function getPropertiesForVariant(theme: GrafanaTheme2, variant: ButtonVariant, fill: ButtonFill): CSSObject;
export {};
