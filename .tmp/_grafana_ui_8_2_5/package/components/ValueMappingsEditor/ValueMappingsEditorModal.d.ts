/// <reference types="react" />
import { GrafanaTheme2, ValueMapping } from '@grafana/data';
import { ValueMappingEditRowModel } from './ValueMappingEditRow';
export interface Props {
    value: ValueMapping[];
    onChange: (valueMappings: ValueMapping[]) => void;
    onClose: () => void;
}
export declare function ValueMappingsEditorModal({ value, onChange, onClose }: Props): JSX.Element;
export declare const getStyles: (theme: GrafanaTheme2) => {
    editTable: string;
};
export declare function editModelToSaveModel(rows: ValueMappingEditRowModel[]): ValueMapping[];
export declare function buildEditRowModels(value: ValueMapping[]): ValueMappingEditRowModel[];
