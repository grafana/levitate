import { Field, LinkModel, LogRowModel } from '@grafana/data';
declare type FieldDef = {
    key: string;
    value: string;
    links?: Array<LinkModel<Field>>;
    fieldIndex?: number;
};
/**
 * Returns all fields for log row which consists of fields we parse from the message itself and any derived fields
 * setup in data source config.
 */
export declare const getAllFields: (row: LogRowModel, getFieldLinks?: ((field: Field, rowIndex: number) => Array<LinkModel<Field>>) | undefined) => FieldDef[];
export {};
