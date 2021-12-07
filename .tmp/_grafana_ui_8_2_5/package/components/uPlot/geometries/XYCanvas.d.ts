import React from 'react';
interface XYCanvasProps {
    top: number;
    left: number;
}
/**
 * Renders absolutely positioned element on top of the uPlot's plotting area (axes are not included!).
 * Useful when you want to render some overlay with canvas-independent elements on top of the plot.
 */
export declare const XYCanvas: React.FC<XYCanvasProps>;
export {};
