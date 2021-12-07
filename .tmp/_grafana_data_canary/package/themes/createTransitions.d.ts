declare const easing: {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    sharp: string;
};
declare const duration: {
    shortest: number;
    shorter: number;
    short: number;
    standard: number;
    complex: number;
    enteringScreen: number;
    leavingScreen: number;
};
/** @alpha */
export interface CreateTransitionOptions {
    duration?: number | string;
    easing?: string;
    delay?: number | string;
}
/** @alpha */
export declare function create(props?: string | string[], options?: CreateTransitionOptions): string;
export declare function getAutoHeightDuration(height: number): number;
/** @alpha */
export interface ThemeTransitions {
    create: typeof create;
    duration: typeof duration;
    easing: typeof easing;
    getAutoHeightDuration: typeof getAutoHeightDuration;
}
/** @internal */
export declare function createTransitions(): ThemeTransitions;
export {};
