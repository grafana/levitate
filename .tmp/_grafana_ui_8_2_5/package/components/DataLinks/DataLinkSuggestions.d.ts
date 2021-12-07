import { VariableSuggestion } from '@grafana/data';
import React from 'react';
interface DataLinkSuggestionsProps {
    activeRef?: React.RefObject<HTMLDivElement>;
    suggestions: VariableSuggestion[];
    activeIndex: number;
    onSuggestionSelect: (suggestion: VariableSuggestion) => void;
    onClose?: () => void;
}
export declare const DataLinkSuggestions: React.FC<DataLinkSuggestionsProps>;
export {};
