import ts from 'typescript';
import { getImportsForFile } from '../compiler/imports';
import { ExportsInfo } from '../types';
import { logDebug } from '../utils/log';
import { getAllIdentifiers } from '../utils/typescript';

/**
 * Given a project Program and a list of exports, returns a list of
 * symbols that are used in the project.
 */
export function getUsageOf(project: ts.Program, pkgExports: ExportsInfo, fullPkgName: string) {
  // remove the last pat ofh the package name if exists (e.g. @latest)
  const importName = fullPkgName.replace(/(?<=.)(@.*$)/, '');
  const usageSymbols: Record<string, ts.Symbol> = {};
  for (const sourceFile of project.getSourceFiles()) {
    // skip node_modules dependencies
    if (sourceFile.fileName.includes('/node_modules/')) {
      continue;
    }
    logDebug('getting usages of', importName, 'in', sourceFile.fileName);
    const sourceFileUsage = getUsageOfSourceFile(sourceFile, pkgExports, importName);
    Object.assign(usageSymbols, sourceFileUsage);
  }
  return usageSymbols;
}

function getUsageOfSourceFile(sourceFile: ts.SourceFile, pkgExports: ExportsInfo, importName: string) {
  const sourceFileImports = getImportsForFile(sourceFile, [importName]);
  const importsPropertyNames = sourceFileImports.map((imp) => imp.propertyName);
  const identifiers = getAllIdentifiers(sourceFile);
  const usage: Record<string, ts.Identifier> = {};
  for (const identifier of identifiers) {
    const identifierName = identifier.getText();
    if (pkgExports.exports[identifierName] && importsPropertyNames.includes(identifierName)) {
      usage[identifierName] = identifier;
    }
  }
  return usage;
}
