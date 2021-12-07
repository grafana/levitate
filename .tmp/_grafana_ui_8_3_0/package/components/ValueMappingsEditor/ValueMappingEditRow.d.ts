import { MappingType, SpecialValueMatch, ValueMappingResult } from '@grafana/data';
export interface ValueMappingEditRowModel {
    type: MappingType;
    from?: number;
    to?: number;
    pattern?: string;
    key?: string;
    isNew?: boolean;
    specialMatch?: SpecialValueMatch;
    result: ValueMappingResult;
}
interface Props {
    mapping: ValueMappingEditRowModel;
    index: number;
    onChange: (index: number, mapping: ValueMappingEditRowModel) => void;
    onRemove: (index: number) => void;
    onDuplicate: (index: number) => void;
}
export declare function ValueMappingEditRow({ mapping, index, onChange, onRemove, onDuplicate: onDupliate }: Props): JSX.Element;
export {};
