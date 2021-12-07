/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param color - Hex color, i.e. #nnn or #nnnnnn
 * @returns A CSS rgb color string
 * @beta
 */
export declare function hexToRgb(color: string): string;
/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param color - RGB color, i.e. rgb(n, n, n)
 * @returns A CSS rgb color string, i.e. #nnnnnn
 * @beta
 */
export declare function rgbToHex(color: string): string;
/**
 * Converts a color to hex6 format if there is no alpha, hex8 if there is.
 * @param color - Hex, RGB, HSL color
 * @returns A hex color string, i.e. #ff0000 or #ff0000ff
 */
export declare function asHexString(color: string): string;
/**
 * Converts a color from hsl format to rgb format.
 * @param color - HSL color values
 * @returns rgb color values
 * @beta
 */
export declare function hslToRgb(color: string | DecomposeColor): string;
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 * @beta
 */
export declare function decomposeColor(color: string | DecomposeColor): DecomposeColor;
/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns A CSS color string
 * @beta
 */
export declare function recomposeColor(color: DecomposeColor): string;
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param canvas - A CSS color that alpha based backgrounds blends into
 * @returns A contrast ratio value in the range 0 - 21.
 * @beta
 */
export declare function getContrastRatio(foreground: string, background: string, canvas?: string): number;
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param background - CSS color that needs to be take in to account to calculate luminance for colors with opacity
 * @returns The relative brightness of the color in the range 0 - 1
 * @beta
 */
export declare function getLuminance(color: string, background?: string): number;
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param coefficient=0.15 - multiplier in the range 0 - 1
 * @returns A CSS color string. Hex input values are returned as rgb
 * @beta
 */
export declare function emphasize(color: string, coefficient?: number): string;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param value - value to set the alpha channel to in the range 0 - 1
 * @returns A CSS color string. Hex input values are returned as rgb
 * @beta
 */
export declare function alpha(color: string, value: number): string;
/**
 * Darkens a color.
 * @param color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param coefficient - multiplier in the range 0 - 1
 * @returns A CSS color string. Hex input values are returned as rgb
 * @beta
 */
export declare function darken(color: string, coefficient: number): string;
/**
 * Lightens a color.
 * @param color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param coefficient - multiplier in the range 0 - 1
 * @returns A CSS color string. Hex input values are returned as rgb
 * @beta
 */
export declare function lighten(color: string, coefficient: number): string;
interface DecomposeColor {
    type: string;
    values: any;
    colorSpace?: string;
}
export {};
