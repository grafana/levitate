import React, { HTMLAttributes } from 'react';
import { HighlightPart } from '../../types';
declare type OnLabelClick = (name: string, value: string | undefined, event: React.MouseEvent<HTMLElement>) => void;
interface Props extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
    name: string;
    active?: boolean;
    loading?: boolean;
    searchTerm?: string;
    value?: string;
    facets?: number;
    title?: string;
    highlightParts?: HighlightPart[];
    onClick?: OnLabelClick;
}
/**
 * @internal
 */
export declare const Label: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export {};
