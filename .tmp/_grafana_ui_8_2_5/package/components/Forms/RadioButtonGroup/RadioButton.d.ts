import React from 'react';
import { StringSelector } from '@grafana/e2e-selectors';
export declare type RadioButtonSize = 'sm' | 'md';
export interface RadioButtonProps {
    size?: RadioButtonSize;
    disabled?: boolean;
    name?: string;
    description?: string;
    active: boolean;
    id: string;
    onChange: () => void;
    fullWidth?: boolean;
    'aria-label'?: StringSelector;
}
export declare const RadioButton: React.FC<RadioButtonProps>;