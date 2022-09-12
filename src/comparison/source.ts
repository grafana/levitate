import ts from 'typescript';
import { compareExports } from '../commands/compare/compare';
import { getExportInfo } from '../compiler/exports';
import { Comparison, IncompatibilityInfo } from '../types';
import { getUsageOfPackageExports } from '../usage/usage';
import { logDebug } from '../utils/log';
import { resolvePackage } from '../utils/npm';
import { getAllIdentifiers } from '../utils/typescript';

export async function getIncompatibilitiesBetweenPackages(
  projectProgram: ts.Program,
  pkgFrom: string,
  pkgTo: string
): Promise<IncompatibilityInfo[]> {
  const fromPathResolved = await resolvePackage(pkgFrom);
  const toPathResolved = await resolvePackage(pkgTo);
  logDebug("Comparing '" + fromPathResolved + "' to '" + toPathResolved + "'");
  const comparison = compareExports(fromPathResolved, toPathResolved);
  const usagePerSourceFile = getUsageOfPackageExports(projectProgram, getExportInfo(fromPathResolved), pkgFrom);
  const incompatibilities: IncompatibilityInfo[] = [];

  for (const [sourceFile, usages] of usagePerSourceFile) {
    for (const change of Object.keys(comparison.changes)) {
      if (usages[change]) {
        const identifier = usages[change];
        incompatibilities.push({
          name: identifier.getText(),
          codeIdentifier: identifier,
          sourceFile: sourceFile,
          change: comparison.changes[change],
        });
      }
    }

    for (const removal of Object.keys(comparison.removals)) {
      if (usages[removal]) {
        const identifier = usages[removal];
        incompatibilities.push({
          name: identifier.getText(),
          codeIdentifier: identifier,
          sourceFile: sourceFile,
          removal: comparison.removals[removal],
        });
      }
    }
  }

  return incompatibilities;
}

export function getIncompatibilitiesFromComparison(
  sourceFile: ts.SourceFile,
  comparison: Comparison
): IncompatibilityInfo[] {
  const possibleIncompatibilities: IncompatibilityInfo[] = [];
  const identifiers = getAllIdentifiers(sourceFile);
  const identifiersMap: Record<string, ts.Identifier> = {};
  for (const identifier of identifiers) {
    identifiersMap[identifier.getText()] = identifier;
  }

  for (const change of Object.keys(comparison.changes)) {
    if (identifiersMap[change]) {
      const identifier = identifiersMap[change];
      possibleIncompatibilities.push({
        name: identifier.getText(),
        codeIdentifier: identifier,
        sourceFile: sourceFile,
        change: comparison.changes[change],
      });
    }
  }

  for (const removal of Object.keys(comparison.removals)) {
    if (identifiersMap[removal]) {
      const identifier = identifiersMap[removal];
      possibleIncompatibilities.push({
        name: identifier.getText(),
        codeIdentifier: identifier,
        sourceFile: sourceFile,
        removal: comparison.removals[removal],
      });
    }
  }

  return possibleIncompatibilities;
}
