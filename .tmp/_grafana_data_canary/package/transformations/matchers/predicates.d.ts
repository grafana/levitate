import { Field, DataFrame } from '../../types/dataFrame';
import { FieldMatcherInfo, FrameMatcherInfo } from '../../types/transformations';
export declare const alwaysFieldMatcher: (field: Field) => boolean;
export declare const alwaysFrameMatcher: (frame: DataFrame) => boolean;
export declare const neverFieldMatcher: (field: Field) => boolean;
export declare const notTimeFieldMatcher: (field: Field) => boolean;
export declare const neverFrameMatcher: (frame: DataFrame) => boolean;
export declare function getFieldPredicateMatchers(): FieldMatcherInfo[];
export declare function getFramePredicateMatchers(): FrameMatcherInfo[];
