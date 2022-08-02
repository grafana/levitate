import ts from 'typescript';
import { Comparison, IncompatibilityInfo } from './types';
import { compareExports } from './utils.compare';
import { resolvePackage } from './utils.npm';
import { getAllIdentifiers } from './utils/typescript';

export async function getIncompatibilitiesBetweenPackages(
  program: ts.Program,
  pkgFrom: string,
  pkgTo: string
): Promise<IncompatibilityInfo[]> {
  const fromPathResolved = await resolvePackage(pkgFrom);
  const toPathResolved = await resolvePackage(pkgTo);
  const comparison = compareExports(fromPathResolved, toPathResolved);
  const incompatibilities: IncompatibilityInfo[] = [];
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      incompatibilities.push(...getIncompatibilitiesFromComparison(sourceFile, comparison));
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
