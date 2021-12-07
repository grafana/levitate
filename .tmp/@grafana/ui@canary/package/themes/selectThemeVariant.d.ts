import { GrafanaThemeType } from '@grafana/data';
/**
 * @deprecated
 */
export declare type VariantDescriptor = {
    [key in GrafanaThemeType]: string | number;
};
/**
 * @deprecated use theme.isLight ? or theme.isDark instead
 */
export declare const selectThemeVariant: (variants: VariantDescriptor, currentTheme?: GrafanaThemeType | undefined) => string | number;
