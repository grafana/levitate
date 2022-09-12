import ts from 'typescript';
import { Exports, ExportsInfo } from '../types';
import { createTsProgram } from '../utils/typescript';

// Returns all the exported members of a program identified by a root file (entry file)
// @param rootFile - Has to be an absolute path
export function getExportInfo(rootFile: string): ExportsInfo {
  const program = createTsProgram(rootFile);
  const programExports = getExportedSymbolsForProgram(program);

  return {
    exports: programExports,
    program,
  };
}

export function getExportedSymbolsForProgram(program: ts.Program): Exports {
  const rootFileNames = program.getRootFileNames();
  let programExports = {};

  // TODO: usually we are only running the tool against a single "root file", we could simplify the logic if we would only cater for that scenario instead of expecting multiple ones
  for (const sourceFile of program.getSourceFiles()) {
    if (!rootFileNames.includes(sourceFile.fileName)) {
      continue;
    }
    const checker = program.getTypeChecker();
    const sourceFileSymbol = checker.getSymbolAtLocation(sourceFile);
    if (!sourceFileSymbol) {
      continue;
    }
    const exports = checker.getExportsOfModule(sourceFileSymbol);
    const groupedExports = {};
    for (const item of exports) {
      groupedExports[item.getName()] = item;
    }

    programExports = { ...programExports, ...groupedExports };
  }

  return programExports;
}
