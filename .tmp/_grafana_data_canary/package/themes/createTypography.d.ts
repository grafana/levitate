import { ThemeColors } from './createColors';
/** @beta */
export interface ThemeTypography {
    fontFamily: string;
    fontFamilyMonospace: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    htmlFontSize?: number;
    h1: ThemeTypographyVariant;
    h2: ThemeTypographyVariant;
    h3: ThemeTypographyVariant;
    h4: ThemeTypographyVariant;
    h5: ThemeTypographyVariant;
    h6: ThemeTypographyVariant;
    body: ThemeTypographyVariant;
    bodySmall: ThemeTypographyVariant;
    /**
     * @deprecated
     * from legacy old theme
     * */
    size: {
        base: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    pxToRem: (px: number) => string;
}
export interface ThemeTypographyVariant {
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    fontFamily: string;
    letterSpacing?: string;
}
export interface ThemeTypographyInput {
    fontFamily?: string;
    fontFamilyMonospace?: string;
    fontSize?: number;
    fontWeightLight?: number;
    fontWeightRegular?: number;
    fontWeightMedium?: number;
    fontWeightBold?: number;
    htmlFontSize?: number;
}
export declare function createTypography(colors: ThemeColors, typographyInput?: ThemeTypographyInput): ThemeTypography;
