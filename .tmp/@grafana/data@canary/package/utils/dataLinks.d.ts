import { DataLink, Field, InternalDataLink, InterpolateFunction, LinkModel, ScopedVars, TimeRange } from '../types';
export declare const DataLinkBuiltInVars: {
    keepTime: string;
    timeRangeFrom: string;
    timeRangeTo: string;
    includeVars: string;
    seriesName: string;
    fieldName: string;
    valueTime: string;
    valueNumeric: string;
    valueText: string;
    valueRaw: string;
    valueCalc: string;
};
export declare type LinkToExploreOptions = {
    link: DataLink;
    scopedVars: ScopedVars;
    range: TimeRange;
    field: Field;
    internalLink: InternalDataLink;
    onClickFn?: (options: {
        datasourceUid: string;
        query: any;
        range?: TimeRange;
    }) => void;
    replaceVariables: InterpolateFunction;
};
export declare function mapInternalLinkToExplore(options: LinkToExploreOptions): LinkModel<Field>;
