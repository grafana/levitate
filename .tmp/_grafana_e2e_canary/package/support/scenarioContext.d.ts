import { DeleteDashboardConfig } from '../flows/deleteDashboard';
import { DeleteDataSourceConfig } from '../flows/deleteDataSource';
export interface ScenarioContext {
    addedDashboards: DeleteDashboardConfig[];
    addedDataSources: DeleteDataSourceConfig[];
    lastAddedDashboard: string;
    lastAddedDashboardUid: string;
    lastAddedDataSource: string;
    lastAddedDataSourceId: string;
    [key: string]: any;
}
export declare const getScenarioContext: () => any;
export declare const setScenarioContext: (newContext: Partial<ScenarioContext>) => any;
