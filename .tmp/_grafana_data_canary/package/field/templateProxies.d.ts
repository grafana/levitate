import { DataFrame, Field } from '../types';
/**
 * This object is created often, and only used when tmplates exist.  Using a proxy lets us delay
 * calculations of the more complex structures (label names) until they are actually used
 */
export declare function getTemplateProxyForField(field: Field, frame?: DataFrame, frames?: DataFrame[]): any;
