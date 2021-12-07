import { ThemeColors } from './createColors';
/** @beta */
export interface ThemeShadows {
    z1: string;
    z2: string;
    z3: string;
}
/** @alpha */
export declare function createShadows(colors: ThemeColors): ThemeShadows;
