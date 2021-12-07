import { BuildInfo, DataSourceInstanceSettings, FeatureToggles, GrafanaConfig, GrafanaTheme, GrafanaTheme2, LicenseInfo, MapLayerOptions, PanelPluginMeta, PreloadPlugin, SystemDateFormatSettings } from '@grafana/data';
export interface AzureSettings {
    cloud?: string;
    managedIdentityEnabled: boolean;
}
export declare class GrafanaBootConfig implements GrafanaConfig {
    datasources: {
        [str: string]: DataSourceInstanceSettings;
    };
    panels: {
        [key: string]: PanelPluginMeta;
    };
    minRefreshInterval: string;
    appUrl: string;
    appSubUrl: string;
    windowTitlePrefix: string;
    buildInfo: BuildInfo;
    newPanelTitle: string;
    bootData: any;
    externalUserMngLinkUrl: string;
    externalUserMngLinkName: string;
    externalUserMngInfo: string;
    allowOrgCreate: boolean;
    disableLoginForm: boolean;
    defaultDatasource: string;
    alertingEnabled: boolean;
    alertingErrorOrTimeout: string;
    alertingNoDataOrNullValues: string;
    alertingMinInterval: number;
    authProxyEnabled: boolean;
    exploreEnabled: boolean;
    ldapEnabled: boolean;
    sigV4AuthEnabled: boolean;
    samlEnabled: boolean;
    samlName: string;
    autoAssignOrg: boolean;
    verifyEmailEnabled: boolean;
    oauth: any;
    disableUserSignUp: boolean;
    loginHint: any;
    passwordHint: any;
    loginError: any;
    navTree: any;
    viewersCanEdit: boolean;
    editorsCanAdmin: boolean;
    disableSanitizeHtml: boolean;
    liveEnabled: boolean;
    theme: GrafanaTheme;
    theme2: GrafanaTheme2;
    pluginsToPreload: PreloadPlugin[];
    featureToggles: FeatureToggles;
    licenseInfo: LicenseInfo;
    rendererAvailable: boolean;
    rendererVersion: string;
    http2Enabled: boolean;
    dateFormats?: SystemDateFormatSettings;
    sentry: {
        enabled: boolean;
        dsn: string;
        customEndpoint: string;
        sampleRate: number;
    };
    pluginCatalogURL: string;
    pluginAdminEnabled: boolean;
    pluginAdminExternalManageEnabled: boolean;
    pluginCatalogHiddenPlugins: string[];
    expressionsEnabled: boolean;
    customTheme?: any;
    awsAllowedAuthProviders: string[];
    awsAssumeRoleEnabled: boolean;
    azure: AzureSettings;
    caching: {
        enabled: boolean;
    };
    geomapDefaultBaseLayerConfig?: MapLayerOptions;
    geomapDisableCustomBaseLayer?: boolean;
    unifiedAlertingEnabled: boolean;
    applicationInsightsConnectionString?: string;
    applicationInsightsEndpointUrl?: string;
    recordedQueries: {
        enabled: boolean;
    };
    constructor(options: GrafanaBootConfig);
}
/**
 * Use this to access the {@link GrafanaBootConfig} for the current running Grafana instance.
 *
 * @public
 */
export declare const config: GrafanaBootConfig;
