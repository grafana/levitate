export declare type ScaleCalculator = (value: number) => string;

export declare enum StreamingFrameAction {
  Append = 'append',
  Replace = 'replace',
}
export interface DataSourceRef {
  /** The plugin type-id */
  type?: string;
  /** Specific datasource instance */
  uid?: string;
}

export declare function isDataSourceRef(ref: DataSourceRef | string | null): string[];

export declare const isTableData: (data: string) => number;

export declare class DataFrameView<T = any> {
  private data;
  private index;
  private obj;
  private foo?: string;
  constructor(data: number);
  get dataFrame(): number;
  get length(): number;
  /**
   * Helper function to return the {@link DisplayProcessor} for a given field column.
   * @param colIndex - the field column index for the data frame.
   */
  getFieldDisplayProcessor(colIndex: number): string | undefined;
  /**
   * The contents of the object returned from this function
   * are optimized for use in a loop. All calls return the same object
   * but the index has changed.
   *
   * @example
   * ```typescript
   *   // `first`, `second` and `third` will all point to the same contents at index 2:
   *   const first = view.get(0);
   *   const second = view.get(1);
   *   const third = view.get(2);
   *
   *   // If you need three different objects, consider something like:
   *   const first = { ...view.get(0) };
   *   const second = { ...view.get(1) };
   *   const third = { ...view.get(2) };
   * ```
   * @param idx - The index of the object you currently are inspecting
   */
  get(idx: number): T;
  toArray(): T[];
}
