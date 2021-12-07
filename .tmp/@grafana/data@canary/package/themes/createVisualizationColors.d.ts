import { ThemeColors } from './createColors';
/**
 * @alpha
 */
export interface ThemeVisualizationColors {
    /** Only for internal use by color schemes */
    palette: string[];
    /** Lookup the real color given the name */
    getColorByName: (color: string) => string;
    /** Colors organized by hue */
    hues: ThemeVizHue[];
}
/**
 * @alpha
 */
export interface ThemeVizColor {
    color: string;
    name: string;
    aliases?: string[];
    primary?: boolean;
}
/**
 * @alpha
 */
export interface ThemeVizHue {
    name: string;
    shades: ThemeVizColor[];
}
/**
 * @internal
 */
export declare function createVisualizationColors(colors: ThemeColors): ThemeVisualizationColors;
