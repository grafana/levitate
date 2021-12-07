import { DataFrame, DataLink, VariableSuggestion } from '@grafana/data';
import { FC } from 'react';
interface DataLinkEditorModalContentProps {
    link: DataLink;
    index: number;
    data: DataFrame[];
    getSuggestions: () => VariableSuggestion[];
    onSave: (index: number, ink: DataLink) => void;
    onCancel: (index: number) => void;
}
export declare const DataLinkEditorModalContent: FC<DataLinkEditorModalContentProps>;
export {};
