import { ComponentType } from 'react';
import { Observable } from 'rxjs';
import { DataQuery } from './query';
import { DataQueryRequest, DataQueryResponse, DataSourceApi, DataSourceJsonData, DataSourceOptionsType, DataSourceQueryType, QueryEditorProps } from './datasource';
/**
 * Enum with the different variable support types
 *
 * @alpha -- experimental
 */
export declare enum VariableSupportType {
    Legacy = "legacy",
    Standard = "standard",
    Custom = "custom",
    Datasource = "datasource"
}
/**
 * Base class for VariableSupport classes
 *
 * @alpha -- experimental
 */
export declare abstract class VariableSupportBase<DSType extends DataSourceApi<TQuery, TOptions>, TQuery extends DataQuery = DataSourceQueryType<DSType>, TOptions extends DataSourceJsonData = DataSourceOptionsType<DSType>> {
    abstract getType(): VariableSupportType;
}
/**
 * Extend this class in a data source plugin to use the standard query editor for Query variables
 *
 * @alpha -- experimental
 */
export declare abstract class StandardVariableSupport<DSType extends DataSourceApi<TQuery, TOptions>, TQuery extends DataQuery = DataSourceQueryType<DSType>, TOptions extends DataSourceJsonData = DataSourceOptionsType<DSType>> extends VariableSupportBase<DSType, TQuery, TOptions> {
    getType(): VariableSupportType;
    abstract toDataQuery(query: StandardVariableQuery): TQuery;
    query?(request: DataQueryRequest<TQuery>): Observable<DataQueryResponse>;
}
/**
 * Extend this class in a data source plugin to use a customized query editor for Query variables
 *
 * @alpha -- experimental
 */
export declare abstract class CustomVariableSupport<DSType extends DataSourceApi<TQuery, TOptions>, VariableQuery extends DataQuery = any, TQuery extends DataQuery = DataSourceQueryType<DSType>, TOptions extends DataSourceJsonData = DataSourceOptionsType<DSType>> extends VariableSupportBase<DSType, TQuery, TOptions> {
    getType(): VariableSupportType;
    abstract editor: ComponentType<QueryEditorProps<DSType, TQuery, TOptions, VariableQuery>>;
    abstract query(request: DataQueryRequest<VariableQuery>): Observable<DataQueryResponse>;
}
/**
 * Extend this class in a data source plugin to use the query editor in the data source plugin for Query variables
 *
 * @alpha -- experimental
 */
export declare abstract class DataSourceVariableSupport<DSType extends DataSourceApi<TQuery, TOptions>, TQuery extends DataQuery = DataSourceQueryType<DSType>, TOptions extends DataSourceJsonData = DataSourceOptionsType<DSType>> extends VariableSupportBase<DSType, TQuery, TOptions> {
    getType(): VariableSupportType;
}
/**
 * Defines the standard DatQuery used by data source plugins that implement StandardVariableSupport
 *
 * @alpha -- experimental
 */
export interface StandardVariableQuery extends DataQuery {
    query: string;
}
