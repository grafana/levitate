import { Observable } from 'rxjs';
import { ComponentType } from 'react';
import { QueryEditorProps } from './datasource';
import { DataFrame } from './dataFrame';
import { DataQuery, DataSourceRef } from './query';
/**
 * This JSON object is stored in the dashboard json model.
 */
export interface AnnotationQuery<TQuery extends DataQuery = DataQuery> {
    datasource?: DataSourceRef | string | null;
    enable: boolean;
    name: string;
    iconColor: string;
    hide?: boolean;
    builtIn?: number;
    type?: string;
    snapshotData?: any;
    target?: TQuery;
    mappings?: AnnotationEventMappings;
    [key: string]: any;
}
export interface AnnotationEvent {
    id?: string;
    annotation?: any;
    dashboardId?: number;
    panelId?: number;
    userId?: number;
    login?: string;
    email?: string;
    avatarUrl?: string;
    time?: number;
    timeEnd?: number;
    isRegion?: boolean;
    title?: string;
    text?: string;
    type?: string;
    tags?: string[];
    color?: string;
    alertId?: number;
    newState?: string;
    source?: any;
}
export interface AnnotationEventUIModel {
    id?: string;
    from: number;
    to: number;
    tags: string[];
    description: string;
}
/**
 * @alpha -- any value other than `field` is experimental
 */
export declare enum AnnotationEventFieldSource {
    Field = "field",
    Text = "text",
    Skip = "skip"
}
export interface AnnotationEventFieldMapping {
    source?: AnnotationEventFieldSource;
    value?: string;
    regex?: string;
}
export declare type AnnotationEventMappings = Partial<Record<keyof AnnotationEvent, AnnotationEventFieldMapping>>;
/**
 * Since Grafana 7.2
 *
 * This offers a generic approach to annotation processing
 */
export interface AnnotationSupport<TQuery extends DataQuery = DataQuery, TAnno = AnnotationQuery<TQuery>> {
    /**
     * This hook lets you manipulate any existing stored values before running them though the processor.
     * This is particularly helpful when dealing with migrating old formats.  ie query as a string vs object
     */
    prepareAnnotation?(json: any): TAnno;
    /**
     * Convert the stored JSON model to a standard datasource query object.
     * This query will be executed in the datasource and the results converted into events.
     * Returning an undefined result will quietly skip query execution
     */
    prepareQuery?(anno: TAnno): TQuery | undefined;
    /**
     * When the standard frame > event processing is insufficient, this allows explicit control of the mappings
     */
    processEvents?(anno: TAnno, data: DataFrame[]): Observable<AnnotationEvent[] | undefined>;
    /**
     * Specify a custom QueryEditor for the annotation page.  If not specified, the standard one will be used
     */
    QueryEditor?: ComponentType<QueryEditorProps<any, TQuery>>;
}
