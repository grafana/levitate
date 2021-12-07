import { GrafanaTheme, GrafanaThemeType } from '../types/theme';
/**
 * @deprecated use theme.visualization.getColorByName
 */
export declare function getColorForTheme(color: string, theme: GrafanaTheme): string;
/**
 * @deprecated use getColorForTheme
 */
export declare function getColorFromHexRgbOrName(color: string, type?: GrafanaThemeType): string;
export declare const classicColors: string[];
