interface PluginDetails {
    name: string;
    org: string;
    description: string;
    author: boolean | string;
    url: string;
    keywords: string;
}
declare type PluginType = 'panel-plugin' | 'datasource-plugin' | 'backend-datasource-plugin';
export declare const getGitUsername: () => Promise<string>;
export declare const getPluginIdFromName: (name: string) => string;
export declare const getPluginId: (pluginDetails: PluginDetails) => string;
export declare const getPluginKeywords: (pluginDetails: PluginDetails) => string[];
export declare const verifyGitExists: () => Promise<unknown>;
export declare const promptPluginType: () => Promise<{
    type: PluginType;
}>;
export declare const promptPluginDetails: (name?: string | undefined) => Promise<{
    author: string | false;
    name: string;
    org: string;
    description: string;
    url: string;
    keywords: string;
}>;
export declare const fetchTemplate: ({ type, dest }: {
    type: PluginType;
    dest: string;
}) => Promise<void>;
export declare const prepareJsonFiles: ({ type, pluginDetails, pluginPath, }: {
    type: PluginType;
    pluginDetails: PluginDetails;
    pluginPath: string;
}) => Promise<void>;
export declare const removeGitFiles: (pluginPath: string) => Promise<void>;
export declare const formatPluginDetails: (details: PluginDetails) => void;
export declare const printGrafanaTutorialsDetails: (type: PluginType) => void;
export {};
