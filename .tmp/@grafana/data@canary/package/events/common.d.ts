import { AnnotationEvent, DataFrame } from '../types';
import { BusEventBase, BusEventWithPayload } from './types';
/**
 * When hovering over an element this will identify
 *
 * For performance reasons, this object will usually be mutated between updates.  This
 * will avoid creating new objects for events that fire frequently (ie each mouse pixel)
 *
 * @alpha
 */
export interface DataHoverPayload {
    data?: DataFrame;
    rowIndex?: number;
    columnIndex?: number;
    dataId?: string;
    point: Record<string, any>;
    down?: Record<string, any>;
}
/** @alpha */
export declare class DataHoverEvent extends BusEventWithPayload<DataHoverPayload> {
    static type: string;
}
/** @alpha */
export declare class DataHoverClearEvent extends BusEventBase {
    static type: string;
}
/** @alpha */
export declare class DataSelectEvent extends BusEventWithPayload<DataHoverPayload> {
    static type: string;
}
/** @alpha */
export declare class AnnotationChangeEvent extends BusEventWithPayload<Partial<AnnotationEvent>> {
    static type: string;
}
