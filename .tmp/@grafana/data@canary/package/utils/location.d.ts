import { GrafanaConfig, RawTimeRange, ScopedVars } from '../types';
import { UrlQueryMap } from './url';
interface LocationUtilDependencies {
    config: GrafanaConfig;
    getTimeRangeForUrl: () => RawTimeRange;
    getVariablesUrlParams: (scopedVars?: ScopedVars) => UrlQueryMap;
}
export declare const locationUtil: {
    /**
     *
     * @param getConfig
     * @param getAllVariableValuesForUrl
     * @param getTimeRangeForUrl
     * @internal
     */
    initialize: (dependencies: LocationUtilDependencies) => void;
    stripBaseFromUrl: (url: string) => string;
    assureBaseUrl: (url: string) => string;
    updateSearchParams: (init: string, partial: string) => string;
    getTimeRangeUrlParams: () => string | null;
    getVariablesUrlParams: (scopedVars?: ScopedVars | undefined) => string | null;
    processUrl: (url: string) => string;
};
export {};
