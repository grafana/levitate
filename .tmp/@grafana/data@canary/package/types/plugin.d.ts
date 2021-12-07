import { ComponentClass } from 'react';
import { KeyValue } from './data';
/** Describes plugins life cycle status */
export declare enum PluginState {
    alpha = "alpha",
    beta = "beta",
    stable = "stable",
    deprecated = "deprecated"
}
/** Describes {@link https://grafana.com/docs/grafana/latest/plugins | type of plugin} */
export declare enum PluginType {
    panel = "panel",
    datasource = "datasource",
    app = "app",
    renderer = "renderer"
}
/** Describes status of {@link https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/ | plugin signature} */
export declare enum PluginSignatureStatus {
    internal = "internal",
    valid = "valid",
    invalid = "invalid",
    modified = "modified",
    missing = "missing"
}
/** Describes level of {@link https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/#plugin-signature-levels/ | plugin signature level} */
export declare enum PluginSignatureType {
    grafana = "grafana",
    commercial = "commercial",
    community = "community",
    private = "private",
    core = "core"
}
/** Describes error code returned from Grafana plugins API call */
export declare enum PluginErrorCode {
    missingSignature = "signatureMissing",
    invalidSignature = "signatureInvalid",
    modifiedSignature = "signatureModified"
}
/** Describes error returned from Grafana plugins API call */
export interface PluginError {
    errorCode: PluginErrorCode;
    pluginId: string;
}
export interface PluginMeta<T extends KeyValue = {}> {
    id: string;
    name: string;
    type: PluginType;
    info: PluginMetaInfo;
    includes?: PluginInclude[];
    state?: PluginState;
    module: string;
    baseUrl: string;
    dependencies?: PluginDependencies;
    jsonData?: T;
    secureJsonData?: KeyValue;
    enabled?: boolean;
    defaultNavUrl?: string;
    hasUpdate?: boolean;
    enterprise?: boolean;
    latestVersion?: string;
    pinned?: boolean;
    signature?: PluginSignatureStatus;
    signatureType?: PluginSignatureType;
    signatureOrg?: string;
    live?: boolean;
}
interface PluginDependencyInfo {
    id: string;
    name: string;
    version: string;
    type: PluginType;
}
export interface PluginDependencies {
    grafanaDependency?: string;
    grafanaVersion: string;
    plugins: PluginDependencyInfo[];
}
export declare enum PluginIncludeType {
    dashboard = "dashboard",
    page = "page",
    panel = "panel",
    datasource = "datasource"
}
export interface PluginInclude {
    type: PluginIncludeType;
    name: string;
    path?: string;
    icon?: string;
    role?: string;
    addToNav?: boolean;
    component?: string;
}
interface PluginMetaInfoLink {
    name: string;
    url: string;
}
export interface PluginBuildInfo {
    time?: number;
    repo?: string;
    branch?: string;
    hash?: string;
    number?: number;
    pr?: number;
}
export interface ScreenshotInfo {
    name: string;
    path: string;
}
export interface PluginMetaInfo {
    author: {
        name: string;
        url?: string;
    };
    description: string;
    links: PluginMetaInfoLink[];
    logos: {
        large: string;
        small: string;
    };
    build?: PluginBuildInfo;
    screenshots: ScreenshotInfo[];
    updated: string;
    version: string;
}
export interface PluginConfigPageProps<T extends PluginMeta> {
    plugin: GrafanaPlugin<T>;
    query: KeyValue;
}
export interface PluginConfigPage<T extends PluginMeta> {
    title: string;
    icon?: string;
    id: string;
    body: ComponentClass<PluginConfigPageProps<T>>;
}
export declare class GrafanaPlugin<T extends PluginMeta = PluginMeta> {
    meta: T;
    loadError?: boolean;
    angularConfigCtrl?: any;
    configPages?: Array<PluginConfigPage<T>>;
    addConfigPage(tab: PluginConfigPage<T>): this;
    /**
     * @deprecated -- this is no longer necessary and will be removed
     */
    setChannelSupport(support: any): this;
    constructor();
}
export {};
