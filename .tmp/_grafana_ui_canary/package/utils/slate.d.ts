import { Document, Value, SchemaProperties } from 'slate';
export declare const SCHEMA: SchemaProperties;
export declare const makeFragment: (text: string, syntax?: string | undefined) => Document;
export declare const makeValue: (text: string, syntax?: string | undefined) => Value;
