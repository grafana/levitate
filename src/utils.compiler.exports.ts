import * as path from "path";
import * as fs from "fs";
import * as ts from "typescript";
import { ExportsInfo, Exports } from "./types";
import { COMPILER_OPTIONS, createProgram } from "./utils.compiler";

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
  const rootFileNames = program.getRootFileNames();
  let programExports = {};

  // TODO: usually we are only running the tool against a single "root file", we could simplify the logic if we would only cater for that scenario instead of expecting multiple ones
  for (const sourceFile of program.getSourceFiles()) {
    if (!rootFileNames.includes(sourceFile.fileName)) {
      continue;
    }

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

  // Loop through exports
  if (fileSymbol?.exports) {
    fileSymbol.exports.forEach((exportValue, exportName) => {
      // Get wildcard (`export * from`) exports
      if (exportName === "__export") {
        // Loop through all the wildcard exports
        exportValue.declarations.forEach((declaration) => {
          const exportDeclaration = declaration as ts.ExportDeclaration;
          const moduleName = getExportPackageName(exportDeclaration);
          const resolvedModuleName = resolveModuleName(moduleName, sourceFile);
          const resolvedSourceFile = program.getSourceFile(resolvedModuleName);

          // Find exported members recursively
          if (resolvedSourceFile) {
            const resolvedExports = getExportedSymbolsForFile(
              resolvedSourceFile,
              program
            );

            // TODO: check if it can be an issue that we can possibly override already existing exports
            Object.keys(resolvedExports).forEach((resolvedExportName) => {
              fileExports[resolvedExportName] =
                resolvedExports[resolvedExportName];
            });
          }
        });
      }

      // Get mamed and default exports
      else if (exportName) {
        fileExports[exportName] = exportValue;
      }
    });
  }

  return fileExports;
}

export function getExportPackageName(node: ts.ExportDeclaration) {
  return node.moduleSpecifier.getText().replace(/'/g, "").replace(/"/g, "");
}

// TODO: there must be an easier way to do this using the compiler
// We need to do this as we cannot find a source file by using the relative import in the files.
export function resolveModuleName(
  moduleName: string,
  sourceFile: ts.SourceFile
) {
  const resolvedPath = path.join(path.dirname(sourceFile.fileName), moduleName);
  const extension = path.extname(resolvedPath);

  // It already has an extension, let's use that
  if (extension) {
    return resolvedPath;
  }

  // Suspect it is a type definition file
  if (fs.existsSync(`${resolvedPath}.d.ts`)) {
    return `${resolvedPath}.d.ts`;
  }

  // Suspect it is pointing to an index.d.ts file
  if (fs.existsSync(path.join(resolvedPath, "index.d.ts"))) {
    return path.join(resolvedPath, "index.d.ts");
  }

  return undefined;
}
