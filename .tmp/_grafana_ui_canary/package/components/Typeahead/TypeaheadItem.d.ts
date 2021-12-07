import React from 'react';
import { CompletionItem } from '../../types/completion';
interface Props {
    isSelected: boolean;
    item: CompletionItem;
    style: any;
    prefix?: string;
    onClickItem?: (event: React.MouseEvent) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}
export declare const TypeaheadItem: React.FC<Props>;
export {};
