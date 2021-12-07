import { FieldMatcherInfo, FrameMatcherInfo } from '../../types/transformations';
export interface RegexpOrNamesMatcherOptions {
    pattern?: string;
    names?: string[];
}
/**
 * Mode to be able to toggle if the names matcher should match fields in provided
 * list or all except provided names.
 * @public
 */
export declare enum ByNamesMatcherMode {
    exclude = "exclude",
    include = "include"
}
/**
 * Options to instruct the by names matcher to either match all fields in given list
 * or all except the fields in the list.
 * @public
 */
export interface ByNamesMatcherOptions {
    mode?: ByNamesMatcherMode;
    names?: string[];
    readOnly?: boolean;
    prefix?: string;
}
/**
 * Registry Initialization
 */
export declare function getFieldNameMatchers(): FieldMatcherInfo[];
export declare function getFrameNameMatchers(): FrameMatcherInfo[];
