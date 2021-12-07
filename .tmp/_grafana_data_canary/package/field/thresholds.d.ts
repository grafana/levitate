import { Threshold, Field } from '../types';
export declare const fallBackTreshold: Threshold;
export declare function getActiveThreshold(value: number, thresholds: Threshold[] | undefined): Threshold;
export declare function getActiveThresholdForValue(field: Field, value: number, percent: number): Threshold;
/**
 * Sorts the thresholds
 */
export declare function sortThresholds(thresholds: Threshold[]): Threshold[];
