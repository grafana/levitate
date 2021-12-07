import { Task } from './task';
interface PluginSignOptions {
    signatureType?: string;
    rootUrls?: string[];
}
export declare const pluginSignTask: Task<PluginSignOptions>;
export {};
