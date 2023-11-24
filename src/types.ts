import ts from '@tsd/typescript';

export type SymbolMeta = {
  key: string;
  symbol: ts.Symbol;
  program: ts.Program;
};

export type Exports = Record<string, ts.Symbol>;

export enum ChangeType {
  PARAMETER_TYPE = 'parameter-type',
  PARAMETER_MISSING = 'parameter-missing',
  PARAMETER_NAME = 'parameter-name',
  PARAMETER_ADDITION = 'parameter-addition',
}

export type Change = {
  prev: ts.Symbol;
  current: ts.Symbol;
  prevProgram: ts.Program;
  currentProgram: ts.Program;
  type?: ChangeType;
  subChanges?: Change[];
};

export type Changes = Record<string, Change>;

export type ExportsInfo = {
  exports: Exports;
  program: ts.Program;
};

export type IgnoreExportOptions = {
  useTypeComparable?: boolean;
};

export type IgnoreExportChanges = {
  additions?: RegExp[];
  removals?: RegExp[];
  changes?: RegExp[];
  options?: IgnoreExportOptions;
};

export type ImportInfo = {
  // The name of the package (or path) that we are importing from
  packageName: string;
  // True if it is a named import
  isNamedImport: boolean;
  // True if it is a default import
  isDefaultImport: boolean;
  // The name of the property that was imported as a named import
  propertyName?: string;
  // The name of the file where the import statement is used
  // (Note: this is not present if it is a cumulated info object for multiple occurances of the same import)
  fileName?: string;
  // The whole import statement as text (can contain other named imports, too)
  // (Note: this is not present if it is a cumulated info object for multiple occurances of the same import)
  importStatementAsText?: string;
  // The number of occurances of this import
  // (Note: this is only present if it is a cumulated info object for multiple occurances of the same import)
  count?: number;
  // Holds occurances of the same import that were found in different files
  // (Note: this is only present if it is a cumulated info object for multiple occurances of the same import)
  occurances?: ImportInfo[];
};

export type ImportsInfo = {
  imports: ImportInfo[];
  program: ts.Program;
};

export type Comparison = {
  changes: Changes;
  additions: Exports;
  removals: Exports;
  prevProgram: ts.Program;
  currentProgram: ts.Program;
};

export type CompareCLIArgs = {
  // Path to the previous version of the module / package / type definition file.
  prevPath: string;
  // Path to the current version of the module / package / type definition file.
  currentPath: string;
};

export type ListCLIArgs = {
  // Path to the package / module.
  path: string;
  isVerbose: boolean;
  isJson: boolean;
  filters: string[];
};

export type NpmListDependency = {
  version: string;
  resolved: string;
};

export type NpmList = {
  name: string;
  version: string;
  dependencies?: Record<string, NpmListDependency>;
};

export type IncompatibilityInfo = {
  name: string;
  codeIdentifier: ts.Identifier;
  sourceFile: ts.SourceFile;
  change?: Change;
  removal?: ts.Symbol;
};

export type PackageWithVersion = {
  name: string;
  version: string;
};

export interface IdentifierWithCounter extends ts.Identifier {
  count?: number;
}

export type UsageInfo = {
  // the name of the API that is used
  propertyName: string;
  // the times that the API is used across all fileNames
  count: number;
  // the fileNames where the API is used
  fileName: string;
  // the package from which the API is imported
  packageName: string;
};
