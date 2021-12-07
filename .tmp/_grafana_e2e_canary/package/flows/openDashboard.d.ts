import { TimeRangeConfig } from './setDashboardTimeRange';
interface OpenDashboardDefault {
    uid: string;
}
interface OpenDashboardOptional {
    timeRange?: TimeRangeConfig;
    queryParams?: object;
}
export declare type PartialOpenDashboardConfig = Partial<OpenDashboardDefault> & OpenDashboardOptional;
export declare type OpenDashboardConfig = OpenDashboardDefault & OpenDashboardOptional;
export declare const openDashboard: (config?: PartialOpenDashboardConfig | undefined) => any;
export {};
