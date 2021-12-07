import { Task } from './task';
export interface PluginCIOptions {
    finish?: boolean;
    upload?: boolean;
    signatureType?: string;
    rootUrls?: string[];
    maxJestWorkers?: string;
}
export declare const ciBuildPluginTask: Task<PluginCIOptions>;
export declare const ciPackagePluginTask: Task<PluginCIOptions>;
export declare const ciPluginReportTask: Task<PluginCIOptions>;
