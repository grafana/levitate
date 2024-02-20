import ts from 'typescript';
import { getExportInfo } from '../compiler/exports.js';
import { getImportsForFile } from '../compiler/imports.js';
import { ExportsInfo, IdentifierWithCounter, UsageInfo } from '../types.js';
import { logDebug, logError } from '../utils/log.js';
import { resolvePackage } from '../utils/npm.js';
import { createTsProgram, getAllIdentifiers, getAllPropertyAccessExpressions } from '../utils/typescript.js';

export async function getUsageInfo(path: string, packages: string[]) {
  const project = createTsProgram(path);
  const usageInfo: UsageInfo[] = [];
  for (const pkgName of packages) {
    try {
      const packageResolved = await resolvePackage(pkgName);
      const pkgExports = getExportInfo(packageResolved);
      const usages = getPackageUsage(project, pkgExports, pkgName);
      for (const [sourceFile, identifiers] of usages) {
        for (const [identifier, identifierInfo] of Object.entries(identifiers)) {
          usageInfo.push({
            fileName: sourceFile.fileName,
            propertyName: identifier,
            count: identifierInfo.count,
            packageName: pkgName,
          });
        }
      }
    } catch (e) {
      logError('Could not process', pkgName);
    }
  }
  return Object.values(usageInfo);
}

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
  for (const [key, identifier] of Object.entries(usagePerIdentifier)) {
    usage.push({
      packageName: fullPkgName,
      propertyName: key,
      count: identifier.count,
      fileName: identifier.files?.[0].fileName ?? '',
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

  // for the following code to work as it should
  // we need the project to have dependencies installed
  // https://github.com/grafana/levitate/blob/main/TYPECRIPT_NOTES.md

  const checker = project.getTypeChecker();
  const expressions = getAllPropertyAccessExpressions(sourceFile);
  for (const expression of expressions) {
    const propertyName = expression.name.getText();
    try {
      const expressionSymbol = checker.getSymbolAtLocation(expression.name);
      if (!expressionSymbol || !expressionSymbol.declarations || expressionSymbol.declarations.length === 0) {
        continue;
      }
      const expressionDeclaration = expressionSymbol.declarations[0];
      const parentSymbol = expressionDeclaration.parent;
      //@ts-ignore - obscure ts API
      const parentName = parentSymbol.name?.getText() || parentSymbol.name?.text || '';
      if (importsPropertyNames.includes(parentName)) {
        const compositeName = `${parentName}.${propertyName}`;
        if (!usage[compositeName]) {
          usage[compositeName] = expressionDeclaration as ts.Identifier;
        }
        usage[compositeName].count = (usage[propertyName]?.count || 0) + 1;
      }
    } catch (e) {
      logDebug('Could not process', propertyName, 'in', sourceFile.fileName);
    }
  }
  return usage;
}
