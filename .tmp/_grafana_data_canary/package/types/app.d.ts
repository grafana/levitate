import { ComponentClass } from 'react';
import { KeyValue } from './data';
import { NavModel } from './navModel';
import { PluginMeta, GrafanaPlugin } from './plugin';
/**
 * @public
 * The app container that is loading another plugin (panel or query editor)
 * */
export declare enum CoreApp {
    CloudAlerting = "cloud-alerting",
    UnifiedAlerting = "unified-alerting",
    Dashboard = "dashboard",
    Explore = "explore",
    Unknown = "unknown",
    PanelEditor = "panel-editor",
    PanelViewer = "panel-viewer"
}
export interface AppRootProps<T = KeyValue> {
    meta: AppPluginMeta<T>;
    /**
     * base URL segment for an app, /app/pluginId
     */
    basename: string;
    /**
     * Pass the nav model to the container... is there a better way?
     */
    onNavChanged: (nav: NavModel) => void;
    /**
     * The URL query parameters
     * @deprecated Use react-router instead
     */
    query: KeyValue;
    /**
     * The URL path to this page
     * @deprecated Use react-router instead
     */
    path: string;
}
export interface AppPluginMeta<T = KeyValue> extends PluginMeta<T> {
}
export declare class AppPlugin<T = KeyValue> extends GrafanaPlugin<AppPluginMeta<T>> {
    root?: ComponentClass<AppRootProps<T>>;
    rootNav?: NavModel;
    /**
     * Called after the module has loaded, and before the app is used.
     * This function may be called multiple times on the same instance.
     * The first time, `this.meta` will be undefined
     */
    init(meta: AppPluginMeta): void;
    /**
     * Set the component displayed under:
     *   /a/${plugin-id}/*
     *
     * If the NavModel is configured, the page will have a managed frame, otheriwse it has full control.
     *
     * NOTE: this structure will change in 7.2+ so that it is managed with a normal react router
     */
    setRootPage(root: ComponentClass<AppRootProps<T>>, rootNav?: NavModel): this;
    setComponentsFromLegacyExports(pluginExports: any): void;
}
/**
 * Defines life cycle of a feature
 * @internal
 */
export declare enum FeatureState {
    alpha = "alpha",
    beta = "beta"
}
