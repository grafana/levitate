/** @internal */
export declare type ThemeSpacingOptions = {
    gridSize?: number;
};
/** @internal */
export declare type ThemeSpacingArgument = number | string;
/**
 * @beta
 * The different signatures imply different meaning for their arguments that can't be expressed structurally.
 * We express the difference with variable names.
 * tslint:disable:unified-signatures */
export interface ThemeSpacing {
    (): string;
    (value: ThemeSpacingArgument): string;
    (topBottom: ThemeSpacingArgument, rightLeft: ThemeSpacingArgument): string;
    (top: ThemeSpacingArgument, rightLeft: ThemeSpacingArgument, bottom: ThemeSpacingArgument): string;
    (top: ThemeSpacingArgument, right: ThemeSpacingArgument, bottom: ThemeSpacingArgument, left: ThemeSpacingArgument): string;
    gridSize: number;
}
/** @internal */
export declare function createSpacing(options?: ThemeSpacingOptions): ThemeSpacing;
