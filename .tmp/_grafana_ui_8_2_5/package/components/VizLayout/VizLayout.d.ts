import React, { FC, ComponentType } from 'react';
import { LegendPlacement } from '@grafana/schema';
/**
 * @beta
 */
export interface VizLayoutProps {
    width: number;
    height: number;
    legend?: React.ReactElement<VizLayoutLegendProps> | null;
    children: (width: number, height: number) => React.ReactNode;
}
/**
 * @beta
 */
export interface VizLayoutComponentType extends FC<VizLayoutProps> {
    Legend: ComponentType<VizLayoutLegendProps>;
}
/**
 * @beta
 */
export declare const VizLayout: VizLayoutComponentType;
/**
 * @beta
 */
export interface VizLayoutLegendProps {
    placement: LegendPlacement;
    children: React.ReactNode;
    maxHeight?: string;
    maxWidth?: string;
}
/**
 * @beta
 */
export declare const VizLayoutLegend: FC<VizLayoutLegendProps>;
