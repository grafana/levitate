import { Labels } from '../types/data';
/**
 * Returns a map of label keys to value from an input selector string.
 *
 * Example: `parseLabels('{job="foo", instance="bar"}) // {job: "foo", instance: "bar"}`
 */
export declare function parseLabels(labels: string): Labels;
/**
 * Returns a map labels that are common to the given label sets.
 */
export declare function findCommonLabels(labelsSets: Labels[]): Labels;
/**
 * Returns a map of labels that are in `labels`, but not in `commonLabels`.
 */
export declare function findUniqueLabels(labels: Labels | undefined, commonLabels: Labels): Labels;
/**
 * Check that all labels exist in another set of labels
 */
export declare function matchAllLabels(expect: Labels, against?: Labels): boolean;
/**
 * Serializes the given labels to a string.
 */
export declare function formatLabels(labels: Labels, defaultValue?: string, withoutBraces?: boolean): string;
