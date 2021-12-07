/**
 * @internal
 */
export declare function getCanvasContext(): CanvasRenderingContext2D;
/**
 * @beta
 */
export declare function measureText(text: string, fontSize: number): TextMetrics;
/**
 * @beta
 */
export declare function calculateFontSize(text: string, width: number, height: number, lineHeight: number, maxSize?: number): number;
