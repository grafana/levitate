import * as webpack from 'webpack';
export interface WebpackConfigurationOptions {
    watch?: boolean;
    production?: boolean;
    preserveConsole?: boolean;
}
declare type WebpackConfigurationGetter = (options: WebpackConfigurationOptions) => Promise<webpack.Configuration>;
export declare type CustomWebpackConfigurationGetter = (originalConfig: webpack.Configuration, options: WebpackConfigurationOptions) => webpack.Configuration;
export declare const findModuleFiles: (base: string, files?: string[] | undefined, result?: string[] | undefined) => Promise<string[]>;
export declare const loadWebpackConfig: WebpackConfigurationGetter;
export {};
