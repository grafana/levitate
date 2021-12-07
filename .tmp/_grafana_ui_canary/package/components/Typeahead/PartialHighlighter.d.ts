import React from 'react';
import { HighlightPart } from '../../types';
interface Props {
    text: string;
    highlightParts: HighlightPart[];
    highlightClassName: string;
}
export declare const PartialHighlighter: React.FC<Props>;
export {};
