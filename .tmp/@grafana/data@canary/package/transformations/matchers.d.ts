import { FieldMatcherInfo, MatcherConfig, FrameMatcherInfo, FieldMatcher, FrameMatcher, ValueMatcherInfo, ValueMatcher } from '../types/transformations';
import { Registry } from '../utils/Registry';
/**
 * Registry that contains all of the built in field matchers.
 * @public
 */
export declare const fieldMatchers: Registry<FieldMatcherInfo<any>>;
/**
 * Registry that contains all of the built in frame matchers.
 * @public
 */
export declare const frameMatchers: Registry<FrameMatcherInfo<any>>;
/**
 * Registry that contains all of the built in value matchers.
 * @public
 */
export declare const valueMatchers: Registry<ValueMatcherInfo<any>>;
/**
 * Resolves a field matcher from the registry for given config.
 * Will throw an error if matcher can not be resolved.
 * @public
 */
export declare function getFieldMatcher(config: MatcherConfig): FieldMatcher;
/**
 * Resolves a frame matcher from the registry for given config.
 * Will throw an error if matcher can not be resolved.
 * @public
 */
export declare function getFrameMatchers(config: MatcherConfig): FrameMatcher;
/**
 * Resolves a value matcher from the registry for given config.
 * Will throw an error if matcher can not be resolved.
 * @public
 */
export declare function getValueMatcher(config: MatcherConfig): ValueMatcher;
