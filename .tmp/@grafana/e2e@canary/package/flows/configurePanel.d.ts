import { TimeRangeConfig } from './setTimeRange';
interface AddPanelOverrides {
    dataSourceName: string;
    queriesForm: (config: AddPanelConfig) => void;
    panelTitle: string;
}
interface EditPanelOverrides {
    queriesForm?: (config: EditPanelConfig) => void;
    panelTitle: string;
}
interface ConfigurePanelDefault {
    chartData: {
        method: string;
        route: string | RegExp;
    };
    dashboardUid: string;
    matchScreenshot: boolean;
    saveDashboard: boolean;
    screenshotName: string;
    visitDashboardAtStart: boolean;
}
interface ConfigurePanelOptional {
    dataSourceName?: string;
    queriesForm?: (config: ConfigurePanelConfig) => void;
    panelTitle?: string;
    timeRange?: TimeRangeConfig;
    visualizationName?: string;
}
interface ConfigurePanelRequired {
    isEdit: boolean;
}
export declare type PartialConfigurePanelConfig = Partial<ConfigurePanelDefault> & ConfigurePanelOptional & ConfigurePanelRequired;
export declare type ConfigurePanelConfig = ConfigurePanelDefault & ConfigurePanelOptional & ConfigurePanelRequired;
export declare type PartialAddPanelConfig = PartialConfigurePanelConfig & AddPanelOverrides;
export declare type AddPanelConfig = ConfigurePanelConfig & AddPanelOverrides;
export declare type PartialEditPanelConfig = PartialConfigurePanelConfig & EditPanelOverrides;
export declare type EditPanelConfig = ConfigurePanelConfig & EditPanelOverrides;
export declare const configurePanel: (config: PartialAddPanelConfig | PartialEditPanelConfig | PartialConfigurePanelConfig) => any;
export declare const VISUALIZATION_ALERT_LIST = "Alert list";
export declare const VISUALIZATION_BAR_GAUGE = "Bar gauge";
export declare const VISUALIZATION_CLOCK = "Clock";
export declare const VISUALIZATION_DASHBOARD_LIST = "Dashboard list";
export declare const VISUALIZATION_GAUGE = "Gauge";
export declare const VISUALIZATION_GRAPH = "Graph";
export declare const VISUALIZATION_HEAT_MAP = "Heatmap";
export declare const VISUALIZATION_LOGS = "Logs";
export declare const VISUALIZATION_NEWS = "News";
export declare const VISUALIZATION_PIE_CHART = "Pie Chart";
export declare const VISUALIZATION_PLUGIN_LIST = "Plugin list";
export declare const VISUALIZATION_POLYSTAT = "Polystat";
export declare const VISUALIZATION_STAT = "Stat";
export declare const VISUALIZATION_TABLE = "Table";
export declare const VISUALIZATION_TEXT = "Text";
export declare const VISUALIZATION_WORLD_MAP = "Worldmap Panel";
export {};
