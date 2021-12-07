import { DataFrame, Field } from '../types';
/**
 * Get an appropriate display title
 */
export declare function getFrameDisplayName(frame: DataFrame, index?: number): string;
export declare function getFieldDisplayName(field: Field, frame?: DataFrame, allFrames?: DataFrame[]): string;
