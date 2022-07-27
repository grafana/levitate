import chalk from 'chalk';
import ts from 'typescript';
import {
  compareExports,
  Comparison,
  createProgram,
  getNpmPackageVersionFromProjectPath,
  IncompatibilityInfo,
  PackageWithVersion,
  resolvePackage,
} from '..';
import { printIncompatibilities } from '../utils.print.comparison';
import { getAllIdentifiers } from '../utils/typescript';

export async function isCompatible(projectPath: string, packagesToCheck: PackageWithVersion[]): Promise<void> {
  const projectProgram = createProgram(projectPath);
  for (const pkg of packagesToCheck) {
    console.log(
      `◎ Checking compatibility between ${chalk.blue(projectPath)} and ${chalk.blue(pkg.name)}@${chalk.yellow(
        pkg.version
      )}...`
    );
    // check if this package is used in the project if not skip
    const installedPackageVersion = await getNpmPackageVersionFromProjectPath(projectPath, pkg.name);
    if (!installedPackageVersion) {
      console.log("> Skipping package '" + chalk.blue(pkg) + "' because it is not used in the project.");
      continue;
    }
    const pkgFrom = `${pkg.name}@${installedPackageVersion}`;
    const pkgTo = `${pkg.name}@${pkg.version}`;
    const incompatibilities = await compareUsageWithPackage(projectProgram, pkgFrom, pkgTo);

    console.log(chalk.yellow(`\nComparing ${pkgFrom} to ${pkgTo}`));
    printIncompatibilities(incompatibilities);
    console.log('---\n');
  }
  return;
}

async function compareUsageWithPackage(
  program: ts.Program,
  pkgFrom: string,
  pkgTo: string
): Promise<IncompatibilityInfo[]> {
  const fromPathResolved = await resolvePackage(pkgFrom);
  const toPathResolved = await resolvePackage(pkgTo);
  const comparison = compareExports(fromPathResolved, toPathResolved);
  const toFind: Record<string, ts.Symbol> = {};
  for (const breaking of Object.keys(comparison.removals)) {
    toFind[breaking] = comparison.removals[breaking];
  }
  for (const change of Object.keys(comparison.changes)) {
    toFind[change] = comparison.changes[change].current;
  }
  const incompatibilities: IncompatibilityInfo[] = [];
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      incompatibilities.push(...compareSourceFileWithChanges(sourceFile, comparison));
    }
  }

  return incompatibilities;
}

function compareSourceFileWithChanges(sourceFile: ts.SourceFile, comparison: Comparison): IncompatibilityInfo[] {
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
