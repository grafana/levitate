export interface PluginBundleOptions {
    watch: boolean;
    production?: boolean;
    yarnlink?: boolean;
    preserveConsole?: boolean;
}
export declare const bundlePlugin: ({ watch, production, preserveConsole }: PluginBundleOptions) => Promise<void>;
