import ts from 'typescript';
import { Exports, ExportsInfo } from '../types.js';
import { createTsProgram, isSymbolPrivateDeclaration } from '../utils/typescript.js';

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
    const groupedExports: Record<string, ts.Symbol> = {};
    for (const item of exports) {
      groupedExports[item.getName()] = item;
      Object.assign(groupedExports, getExportSubMembers(item, program));
    }

    programExports = { ...programExports, ...groupedExports };
  }

  return programExports;
}

const subMembersIgnoreList = ['prototype', '__proto__', '__constructor'];

function getExportSubMembers(symbol: ts.Symbol, program: ts.Program): Record<string, ts.Symbol> {
  const checker = program.getTypeChecker();
  const parentName = symbol.getName() || '';
  const subMembers: Record<string, ts.Symbol> = {};
  const declaredType = checker.getDeclaredTypeOfSymbol(symbol);
  const resolvedSymbol = declaredType.getSymbol() ?? symbol;

  // in most cases the resolvedSymbol should have the information. Using the symbol as a fallback
  const members = resolvedSymbol.members ?? symbol.members;
  if (members) {
    members.forEach((value, key) => {
      if (
        value !== undefined &&
        typeof key === 'string' &&
        !subMembersIgnoreList.includes(key) &&
        !isSymbolPrivateDeclaration(value)
      ) {
        subMembers[`${parentName}.${key}`] = value;
      }
    });
  }

  // in most cases the resolvedSymbol should have the information. Using the symbol as a fallback
  const exports = resolvedSymbol.exports ?? symbol.exports;
  if (exports) {
    exports.forEach((value, key) => {
      if (typeof key === 'string' && !subMembersIgnoreList.includes(key) && value) {
        subMembers[`${parentName}.${key}`] = value;
      }
    });
  }
  return subMembers;
}
