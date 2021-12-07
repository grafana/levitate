import { TimeRangeConfig } from './setDashboardTimeRange';
export interface AddAnnotationConfig {
    dataSource: string;
    dataSourceForm?: () => void;
    name: string;
}
export interface AddDashboardConfig {
    annotations: AddAnnotationConfig[];
    timeRange: TimeRangeConfig;
    title: string;
    variables: PartialAddVariableConfig[];
}
interface AddVariableDefault {
    hide: string;
    type: string;
}
interface AddVariableOptional {
    constantValue?: string;
    dataSource?: string;
    label?: string;
    query?: string;
    regex?: string;
}
interface AddVariableRequired {
    name: string;
}
export declare type PartialAddVariableConfig = Partial<AddVariableDefault> & AddVariableOptional & AddVariableRequired;
export declare type AddVariableConfig = AddVariableDefault & AddVariableOptional & AddVariableRequired;
export declare const addDashboard: (config?: Partial<AddDashboardConfig> | undefined) => Cypress.Chainable<{
    config: AddDashboardConfig;
    uid: string;
}>;
export declare const VARIABLE_HIDE_LABEL = "Label";
export declare const VARIABLE_HIDE_NOTHING = "";
export declare const VARIABLE_HIDE_VARIABLE = "Variable";
export declare const VARIABLE_TYPE_AD_HOC_FILTERS = "Ad hoc filters";
export declare const VARIABLE_TYPE_CONSTANT = "Constant";
export declare const VARIABLE_TYPE_DATASOURCE = "Datasource";
export declare const VARIABLE_TYPE_QUERY = "Query";
export {};
