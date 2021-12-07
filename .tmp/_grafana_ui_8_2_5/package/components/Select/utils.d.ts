import { SelectableValue } from '@grafana/data';
import { SelectableOptGroup } from './types';
/**
 * Normalize the value format to SelectableValue[] | []. Only used for single select
 */
export declare const cleanValue: (value: any, options: Array<SelectableValue | SelectableOptGroup | SelectableOptGroup[]>) => any[] | undefined;
/**
 * Find the label for a string|number value inside array of options or optgroups
 */
export declare const findSelectedValue: (value: string | number, options: Array<SelectableValue | SelectableOptGroup | SelectableOptGroup[]>) => SelectableValue | null;
