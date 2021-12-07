import { GrafanaTheme } from '@grafana/data';
/** @public */
export declare const getTheme: (mode?: 'dark' | 'light') => GrafanaTheme;
/** @public */
export declare const mockTheme: (mock: (name?: string | undefined) => GrafanaTheme) => () => void;
