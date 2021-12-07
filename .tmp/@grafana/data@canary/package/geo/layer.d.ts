import { RegistryItemWithOptions } from '../utils/Registry';
import BaseLayer from 'ol/layer/Base';
import Map from 'ol/Map';
import { PanelData } from '../types';
import { GrafanaTheme2 } from '../themes';
import { PanelOptionsEditorBuilder } from '../utils';
import { ReactNode } from 'react';
/**
 * @alpha
 */
export declare enum FrameGeometrySourceMode {
    Auto = "auto",
    Geohash = "geohash",
    Coords = "coords",
    Lookup = "lookup"
}
/**
 * @alpha
 */
export interface FrameGeometrySource {
    mode: FrameGeometrySourceMode;
    geohash?: string;
    latitude?: string;
    longitude?: string;
    h3?: string;
    wkt?: string;
    lookup?: string;
    gazetteer?: string;
}
/**
 * This gets saved in panel json
 *
 * depending on the type, it may have additional config
 *
 * This exists in `grafana/data` so the types are well known and extendable but the
 * layout/frame is control by the map panel
 *
 * @alpha
 */
export interface MapLayerOptions<TConfig = any> {
    type: string;
    name: string;
    config?: TConfig;
    location?: FrameGeometrySource;
    opacity?: number;
}
/**
 * @alpha
 */
export interface MapLayerHandler<TConfig = any> {
    init: () => BaseLayer;
    update?: (data: PanelData) => void;
    legend?: ReactNode;
    /**
     * Show custom elements in the panel edit UI
     */
    registerOptionsUI?: (builder: PanelOptionsEditorBuilder<MapLayerOptions<TConfig>>) => void;
}
/**
 * Map layer configuration
 *
 * @alpha
 */
export interface MapLayerRegistryItem<TConfig = MapLayerOptions> extends RegistryItemWithOptions {
    /**
     * This layer can be used as a background
     */
    isBaseMap?: boolean;
    /**
     * Show location controls
     */
    showLocation?: boolean;
    /**
     * Show transparency controls in UI (for non-basemaps)
     */
    showOpacity?: boolean;
    /**
     * Function that configures transformation and returns a transformer
     * @param options
     */
    create: (map: Map, options: MapLayerOptions<TConfig>, theme: GrafanaTheme2) => Promise<MapLayerHandler>;
}
