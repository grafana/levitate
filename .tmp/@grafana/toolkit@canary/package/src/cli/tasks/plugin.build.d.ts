import { Task, TaskRunner } from './task';
interface PluginBuildOptions {
    coverage: boolean;
    maxJestWorkers?: string;
    preserveConsole?: boolean;
    skipTest?: boolean;
    skipLint?: boolean;
}
interface Fixable {
    fix?: boolean;
}
export declare const prepare: () => Promise<void>;
export declare const versions: () => Promise<void>;
export declare const lintPlugin: ({ fix }?: Fixable) => Promise<void>;
export declare const pluginBuildRunner: TaskRunner<PluginBuildOptions>;
export declare const pluginBuildTask: Task<PluginBuildOptions>;
export {};
