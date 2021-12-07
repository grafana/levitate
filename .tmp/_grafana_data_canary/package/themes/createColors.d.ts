import { DeepPartial, ThemeRichColor } from './types';
/** @internal */
export declare type ThemeColorsMode = 'light' | 'dark';
/** @internal */
export interface ThemeColorsBase<TColor> {
    mode: ThemeColorsMode;
    primary: TColor;
    secondary: TColor;
    info: TColor;
    error: TColor;
    success: TColor;
    warning: TColor;
    text: {
        primary: string;
        secondary: string;
        disabled: string;
        link: string;
        /** Used for auto white or dark text on colored backgrounds */
        maxContrast: string;
    };
    background: {
        /** Dashboard and body background */
        canvas: string;
        /** Primary content pane background (panels etc) */
        primary: string;
        /** Cards and elements that need to stand out on the primary background */
        secondary: string;
    };
    border: {
        weak: string;
        medium: string;
        strong: string;
    };
    gradients: {
        brandVertical: string;
        brandHorizontal: string;
    };
    action: {
        /** Used for selected menu item / select option */
        selected: string;
        /** Used for hovered menu item / select option */
        hover: string;
        /** Used for button/colored background hover opacity */
        hoverOpacity: number;
        /** Used focused menu item / select option */
        focus: string;
        /** Used for disabled buttons and inputs */
        disabledBackground: string;
        /** Disabled text */
        disabledText: string;
        /** Disablerd opacity */
        disabledOpacity: number;
    };
    hoverFactor: number;
    contrastThreshold: number;
    tonalOffset: number;
}
export interface ThemeHoverStrengh {
}
/** @beta */
export interface ThemeColors extends ThemeColorsBase<ThemeRichColor> {
    /** Returns a text color for the background */
    getContrastText(background: string, threshold?: number): string;
    emphasize(color: string, amount?: number): string;
}
/** @internal */
export declare type ThemeColorsInput = DeepPartial<ThemeColorsBase<ThemeRichColor>>;
export declare function createColors(colors: ThemeColorsInput): ThemeColors;
