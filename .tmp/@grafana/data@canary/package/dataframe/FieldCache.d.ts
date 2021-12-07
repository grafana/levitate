import { Field, DataFrame, FieldType } from '../index';
export interface FieldWithIndex extends Field {
    index: number;
}
export declare class FieldCache {
    fields: FieldWithIndex[];
    private fieldByName;
    private fieldByType;
    constructor(data: DataFrame);
    getFields(type?: FieldType): FieldWithIndex[];
    hasFieldOfType(type: FieldType): boolean;
    getFirstFieldOfType(type: FieldType, includeHidden?: boolean): FieldWithIndex | undefined;
    hasFieldNamed(name: string): boolean;
    hasFieldWithNameAndType(name: string, type: FieldType): boolean;
    /**
     * Returns the first field with the given name.
     */
    getFieldByName(name: string): FieldWithIndex | undefined;
    /**
     * Returns the fields with the given label.
     */
    getFieldsByLabel(label: string, value: string): FieldWithIndex[];
}
