import { Observable } from 'rxjs';
import { DataFrame, DataTransformerConfig } from '../types';
/**
 * Apply configured transformations to the input data
 */
export declare function transformDataFrame(options: DataTransformerConfig[], data: DataFrame[]): Observable<DataFrame[]>;
