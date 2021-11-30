import * as ts from "typescript";
import { ExportsInfo, Exports } from "./types";
import { createProgram } from "./utils.compiler";

// Returns all the exported members of a program identified by a root file (entry file)
export function getExportInfo(rootFile: string): ExportsInfo {
  const program = createProgram(rootFile);
  const programExports = getExportedSymbolsForProgram(program);

  return {
    exports: programExports,
    program,
  };
}

export function getExportedSymbolsForProgram(program: ts.Program): Exports {
  let programExports = {};

  for (const sourceFile of program.getSourceFiles()) {
    const fileExports = getExportedSymbolsForFile(sourceFile, program);

    programExports = { ...programExports, ...fileExports };
  }

  return programExports;
}

export function getExportedSymbolsForFile(
  sourceFile: ts.SourceFile,
  program: ts.Program
): Exports {
  const fileExports = {};
  const fileSymbol = program.getTypeChecker().getSymbolAtLocation(sourceFile);

  if (fileSymbol?.exports) {
    fileSymbol.exports.forEach((exportValue, exportName) => {
      if (exportName && exportName !== "__export") {
        fileExports[exportName] = exportValue;
      }
    });
  }

  return fileExports;
}
