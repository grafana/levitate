import React, { ReactElement } from 'react';
interface LabelProps {
    Component: ReactElement;
    onClick?: () => void;
    disabled?: boolean;
}
export declare const useExpandableLabel: (initialExpanded: boolean, onExpandedChange?: ((expanded: boolean) => void) | undefined) => [React.ComponentType<LabelProps>, number, boolean, (expanded: boolean) => void];
export {};
