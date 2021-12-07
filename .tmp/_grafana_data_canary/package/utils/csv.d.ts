import { DataFrame, Field } from '../types';
import { MutableDataFrame } from '../dataframe/MutableDataFrame';
export declare enum CSVHeaderStyle {
    full = 0,
    name = 1,
    none = 2
}
export interface CSVConfig {
    delimiter?: string;
    newline?: string;
    quoteChar?: string;
    encoding?: string;
    useExcelHeader?: boolean;
    headerStyle?: CSVHeaderStyle;
}
export interface CSVParseCallbacks {
    /**
     * Get a callback before any rows are processed
     * This can return a modified table to force any
     * Column configurations
     */
    onHeader: (fields: Field[]) => void;
    onRow: (row: any[]) => void;
}
export interface CSVOptions {
    config?: CSVConfig;
    callback?: CSVParseCallbacks;
}
export declare function readCSV(csv: string, options?: CSVOptions): DataFrame[];
declare enum ParseState {
    Starting = 0,
    InHeader = 1,
    ReadingRows = 2
}
export declare class CSVReader {
    config: CSVConfig;
    callback?: CSVParseCallbacks;
    state: ParseState;
    data: MutableDataFrame[];
    current: MutableDataFrame;
    constructor(options?: CSVOptions);
    private chunk;
    readCSV(text: string): MutableDataFrame[];
}
export declare function toCSV(data: DataFrame[], config?: CSVConfig): string;
export {};
