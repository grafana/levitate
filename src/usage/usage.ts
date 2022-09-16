import ts from 'typescript';
import { getImportsForFile } from '../compiler/imports';
import { ExportsInfo, IdentifierWithCounter, UsageInfo } from '../types';
import { logDebug } from '../utils/log';
import { getAllIdentifiers, getAllPropertyAccessExpressions } from '../utils/typescript';

/**
 * Given a project Program and a list of exports, returns a list of
 * symbols that are used in the project.
 */
export function getPackageUsage(
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
    const sourceFileUsage = getUsageOfSourceFile(project, sourceFile, pkgExports, importName);
    usageMap.set(sourceFile, sourceFileUsage);
  }
  return usageMap;
}

export function getFlattenPackageUsage(project: ts.Program, pkgExports: ExportsInfo, fullPkgName: string): UsageInfo[] {
  const sourceFileUsageMap = getPackageUsage(project, pkgExports, fullPkgName);
  const usagePerIdentifier: Record<string, IdentifierWithCounter & { files?: ts.SourceFile[] }> = {};
  const usage: UsageInfo[] = [];
  for (const [sourceFile, sourceFileUsage] of sourceFileUsageMap) {
    for (const [exportName, identifier] of Object.entries(sourceFileUsage)) {
      if (!usagePerIdentifier[exportName]) {
        usagePerIdentifier[exportName] = identifier;
      } else {
        usagePerIdentifier[exportName].count += identifier.count;
      }
      usagePerIdentifier[exportName].files = usagePerIdentifier[exportName].files || [];
      usagePerIdentifier[exportName].files.push(sourceFile);
    }
  }
  // convert usagePerIdentifier to array
  for (const identifier of Object.values(usagePerIdentifier)) {
    usage.push({
      packageName: fullPkgName,
      propertyName: identifier.getText(),
      count: identifier.count,
      fileNames: identifier.files?.map((file) => file.fileName),
    });
  }
  return usage;
}

function getUsageOfSourceFile(
  project: ts.Program,
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

  const checker = project.getTypeChecker();
  // property access expressions are calls to a property of an object
  const expressions = getAllPropertyAccessExpressions(sourceFile);
  for (const expression of expressions) {
    const propertyName = expression.name.getText();
    try {
      const expressionSymbol = checker.getSymbolAtLocation(expression.name);
      const expressionDeclaration = expressionSymbol.declarations[0];
      const parentSymbol = expressionDeclaration.parent;
      //@ts-ignore - obscure ts API
      const parentName = parentSymbol.name?.getText() || parentSymbol.name?.text || '';
      if (importsPropertyNames.includes(parentName)) {
        const compositeName = `${parentName}.${propertyName}`;
        if (!usage[compositeName]) {
          usage[compositeName] = expressionDeclaration as ts.Identifier;
        }
        usage[compositeName].count = (usage[propertyName].count || 0) + 1;
      }
    } catch (e) {
      logDebug('Could not process', propertyName, 'in', sourceFile.fileName);
    }
  }
  return usage;
}
