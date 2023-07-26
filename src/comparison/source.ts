import ts from 'typescript';
import { compareExports } from '../commands/compare/compare';
import { getExportInfo } from '../compiler/exports';
import { Comparison, IgnoreExportChanges, IncompatibilityInfo } from '../types';
import { getPackageUsage } from '../usage/usage';
import { logDebug } from '../utils/log';
import { resolvePackage } from '../utils/npm';

export async function getIncompatibilitiesBetweenPackages(
  projectProgram: ts.Program,
  pkgFrom: string,
  pkgTo: string,
  ignoredExports: IgnoreExportChanges
): Promise<IncompatibilityInfo[]> {
  const fromPathResolved = await resolvePackage(pkgFrom);
  const toPathResolved = await resolvePackage(pkgTo);
  logDebug("Comparing '" + fromPathResolved + "' to '" + toPathResolved + "'");
  const exportsComparison = compareExports(fromPathResolved, toPathResolved, ignoredExports);
  const incompatibilities: IncompatibilityInfo[] = [];

  const usagePerSourceFile = getPackageUsage(projectProgram, getExportInfo(fromPathResolved), pkgFrom);
  for (const [sourceFile, usages] of usagePerSourceFile) {
    const incompatibilitiesInFile = getIncompatibilitiesFromComparison({
      sourceFile,
      usages,
      comparison: exportsComparison,
    });
    incompatibilities.push(...incompatibilitiesInFile);
  }

  return incompatibilities;
}

export function getIncompatibilitiesFromComparison({
  sourceFile,
  usages,
  comparison,
}: {
  usages: Record<string, ts.Identifier>;
  sourceFile: ts.SourceFile;
  comparison: Comparison;
}): IncompatibilityInfo[] {
  const incompatibilities: IncompatibilityInfo[] = [];
  for (const change of Object.keys(comparison.changes)) {
    if (usages[change]) {
      const identifier = usages[change];
      incompatibilities.push({
        name: change,
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
        name: removal,
        codeIdentifier: identifier,
        sourceFile: sourceFile,
        removal: comparison.removals[removal],
      });
    }
  }

  return incompatibilities;
}
