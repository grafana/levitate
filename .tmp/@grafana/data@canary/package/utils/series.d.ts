import { Field } from '../types/dataFrame';
/**
 * Returns minimal time step from series time field
 * @param timeField
 */
export declare const getSeriesTimeStep: (timeField: Field) => number;
/**
 * Checks if series time field has ms resolution
 * @param timeField
 */
export declare const hasMsResolution: (timeField: Field) => boolean;
