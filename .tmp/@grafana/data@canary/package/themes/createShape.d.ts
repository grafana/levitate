/** @beta */
export interface ThemeShape {
    borderRadius: (amount?: number) => string;
}
/** @internal */
export interface ThemeShapeInput {
    borderRadius?: number;
}
export declare function createShape(options: ThemeShapeInput): ThemeShape;
