import React from 'react';
import { UPlotConfigBuilder } from '../config/UPlotConfigBuilder';
interface ZoomPluginProps {
    onZoom: (range: {
        from: number;
        to: number;
    }) => void;
    config: UPlotConfigBuilder;
}
/**
 * @alpha
 */
export declare const ZoomPlugin: React.FC<ZoomPluginProps>;
export {};
