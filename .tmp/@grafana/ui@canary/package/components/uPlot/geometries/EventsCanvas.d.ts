import { DataFrame, DataFrameFieldIndex } from '@grafana/data';
import React from 'react';
import { UPlotConfigBuilder } from '../config/UPlotConfigBuilder';
interface EventsCanvasProps {
    id: string;
    config: UPlotConfigBuilder;
    events: DataFrame[];
    renderEventMarker: (dataFrame: DataFrame, dataFrameFieldIndex: DataFrameFieldIndex) => React.ReactNode;
    mapEventToXYCoords: (dataFrame: DataFrame, dataFrameFieldIndex: DataFrameFieldIndex) => {
        x: number;
        y: number;
    } | undefined;
}
export declare function EventsCanvas({ id, events, renderEventMarker, mapEventToXYCoords, config }: EventsCanvasProps): JSX.Element | null;
export {};
