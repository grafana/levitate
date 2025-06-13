export interface HistogramTransformerInputs {
  bucketCount?: number;
  bucketSize?: string | number;
  bucketOffset?: string | number;
  combine?: boolean;
}

export interface DataTransformerInfo<TOptions = any> {
  operator: (options: TOptions, context: any) => void;
  isApplicable?: (data: any[]) => boolean;
}

export interface SynchronousDataTransformerInfo<TOptions = any>
  extends DataTransformerInfo<TOptions> {
  transformer: (options: TOptions, context: any) => (frames: any[]) => any[];
}
