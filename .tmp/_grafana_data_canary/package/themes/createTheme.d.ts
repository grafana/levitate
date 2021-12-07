import { ThemeColorsInput } from './createColors';
import { ThemeShapeInput } from './createShape';
import { ThemeSpacingOptions } from './createSpacing';
import { ThemeTypographyInput } from './createTypography';
import { GrafanaTheme2 } from './types';
/** @internal */
export interface NewThemeOptions {
    name?: string;
    colors?: ThemeColorsInput;
    spacing?: ThemeSpacingOptions;
    shape?: ThemeShapeInput;
    typography?: ThemeTypographyInput;
}
/** @internal */
export declare function createTheme(options?: NewThemeOptions): GrafanaTheme2;
