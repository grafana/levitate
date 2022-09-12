import ts from 'typescript';
import { getImportsForFile } from '../compiler/imports';
import { ExportsInfo, IdentifierWithCounter } from '../types';
import { logDebug } from '../utils/log';
import { getAllIdentifiers } from '../utils/typescript';

/**
 * Given a project Program and a list of exports, returns a list of
 * symbols that are used in the project.
 */
export function getUsageOfPackageExports(
  project: ts.Program,
  pkgExports: ExportsInfo,
  fullPkgName: string
): Map<ts.SourceFile, Record<string, IdentifierWithCounter>> {
  // remove the last pat ofh the package name if exists (e.g. @latest)
  const importName = fullPkgName.replace(/(?<=.)(@.*$)/, '');
  const usageMap = new Map<ts.SourceFile, Record<string, ts.Identifier>>();
  for (const sourceFile of project.getSourceFiles()) {
    // skip node_modules dependencies
    if (sourceFile.fileName.includes('/node_modules/')) {
      continue;
    }
    logDebug('getting usages of', importName, 'in', sourceFile.fileName);
    const sourceFileUsage = getUsageOfSourceFile(sourceFile, pkgExports, importName);
    usageMap.set(sourceFile, sourceFileUsage);
  }
  return usageMap;
}

function getUsageOfSourceFile(
  sourceFile: ts.SourceFile,
  pkgExports: ExportsInfo,
  importName: string
): Record<string, IdentifierWithCounter> {
  const sourceFileImports = getImportsForFile(sourceFile, [importName]);
  const importsPropertyNames = sourceFileImports.map((imp) => imp.propertyName);
  const identifiers = getAllIdentifiers(sourceFile);
  const usage: Record<string, IdentifierWithCounter> = {};
  for (const identifier of identifiers) {
    const identifierName = identifier.getText();
    if (pkgExports.exports[identifierName] && importsPropertyNames.includes(identifierName)) {
      if (!usage[identifierName]) {
        usage[identifierName] = identifier;
      }
      usage[identifierName].count = (usage[identifierName].count || 0) + 1;
    }
  }
  return usage;
}
