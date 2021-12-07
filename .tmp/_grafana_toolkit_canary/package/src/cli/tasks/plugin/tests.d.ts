export interface PluginTestOptions {
    updateSnapshot: boolean;
    coverage: boolean;
    watch: boolean;
    testPathPattern?: string;
    testNamePattern?: string;
    maxWorkers?: string;
}
export declare const testPlugin: ({ updateSnapshot, coverage, watch, testPathPattern, testNamePattern, maxWorkers, }: PluginTestOptions) => Promise<void>;
