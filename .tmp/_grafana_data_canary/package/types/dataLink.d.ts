import { DataQuery } from './query';
import { InterpolateFunction } from './panel';
/**
 * Callback info for DataLink click events
 */
export interface DataLinkClickEvent<T = any> {
    origin: T;
    replaceVariables: InterpolateFunction | undefined;
    e?: any;
}
/**
 * Link configuration. The values may contain variables that need to be
 * processed before showing the link to user.
 *
 * TODO: <T extends DataQuery> is not strictly true for internal links as we do not need refId for example but all
 *  data source defined queries extend this so this is more for documentation.
 */
export interface DataLink<T extends DataQuery = any> {
    title: string;
    targetBlank?: boolean;
    url: string;
    onBuildUrl?: (event: DataLinkClickEvent) => string;
    onClick?: (event: DataLinkClickEvent) => void;
    internal?: InternalDataLink<T>;
}
/** @internal */
export interface InternalDataLink<T extends DataQuery = any> {
    query: T;
    datasourceUid: string;
    datasourceName: string;
}
export declare type LinkTarget = '_blank' | '_self' | undefined;
/**
 * Processed Link Model. The values are ready to use
 */
export interface LinkModel<T = any> {
    href: string;
    title: string;
    target: LinkTarget;
    origin: T;
    onClick?: (e: any, origin?: any) => void;
}
/**
 * Provides a way to produce links on demand
 *
 * TODO: ScopedVars in in GrafanaUI package!
 */
export interface LinkModelSupplier<T extends object> {
    getLinks(replaceVariables?: InterpolateFunction): Array<LinkModel<T>>;
}
export declare enum VariableOrigin {
    Series = "series",
    Field = "field",
    Fields = "fields",
    Value = "value",
    BuiltIn = "built-in",
    Template = "template"
}
export interface VariableSuggestion {
    value: string;
    label: string;
    documentation?: string;
    origin: VariableOrigin;
}
export declare enum VariableSuggestionsScope {
    Values = "values"
}
