import { ApplyFieldOverrideOptions, DataFrame, DynamicConfigValue, Field, FieldConfig, FieldOverrideContext, InterpolateFunction, LinkModel, NumericRange, ScopedVars, ValueLinkConfig } from '../types';
import { FieldConfigOptionsRegistry } from './FieldConfigOptionsRegistry';
export declare function findNumericFieldMinMax(data: DataFrame[]): NumericRange;
/**
 * Return a copy of the DataFrame with all rules applied
 */
export declare function applyFieldOverrides(options: ApplyFieldOverrideOptions): DataFrame[];
export interface FieldOverrideEnv extends FieldOverrideContext {
    fieldConfigRegistry: FieldConfigOptionsRegistry;
}
export declare function setDynamicConfigValue(config: FieldConfig, value: DynamicConfigValue, context: FieldOverrideEnv): void;
export declare function setFieldConfigDefaults(config: FieldConfig, defaults: FieldConfig, context: FieldOverrideEnv): void;
/**
 * This checks that all options on FieldConfig make sense.  It mutates any value that needs
 * fixed.  In particular this makes sure that the first threshold value is -Infinity (not valid in JSON)
 */
export declare function validateFieldConfig(config: FieldConfig): void;
export declare const getLinksSupplier: (frame: DataFrame, field: Field, fieldScopedVars: ScopedVars, replaceVariables: InterpolateFunction, timeZone?: string | undefined) => (config: ValueLinkConfig) => Array<LinkModel<Field>>;
/**
 * Return a copy of the DataFrame with raw data
 */
export declare function applyRawFieldOverrides(data: DataFrame[]): DataFrame[];
