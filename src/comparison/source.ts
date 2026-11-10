import ts from 'typescript';
import { compareExports } from '../commands/compare/compare.js';
import { getExportInfo } from '../compiler/exports.js';
import { Change, Comparison, IgnoreExportChanges, IncompatibilityInfo } from '../types.js';
import { getPackageUsage } from '../usage/usage.js';
import { logDebug } from '../utils/log.js';
import { resolvePackage } from '../utils/npm.js';

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
      checker: projectProgram.getTypeChecker(),
      usages,
      comparison: exportsComparison,
    });
    incompatibilities.push(...incompatibilitiesInFile);
  }

  return incompatibilities;
}

export function getIncompatibilitiesFromComparison({
  sourceFile,
  checker,
  usages,
  comparison,
}: {
  usages: Record<string, ts.Identifier>;
  sourceFile: ts.SourceFile;
  checker: ts.TypeChecker;
  comparison: Comparison;
}): IncompatibilityInfo[] {
  const incompatibilities: IncompatibilityInfo[] = [];
  for (const change of Object.keys(comparison.changes)) {
    if (usages[change]) {
      const identifier = usages[change];
      if (usesOnlyStableProperties(sourceFile, checker, identifier, comparison.changes[change])) {
        continue;
      }
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

function usesOnlyStableProperties(
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
  identifier: ts.Identifier,
  change: Change
): boolean {
  if (
    !ts.isImportSpecifier(identifier.parent) ||
    identifier.parent.propertyName ||
    !(change.prev.flags & ts.SymbolFlags.Variable) ||
    !(change.current.flags & ts.SymbolFlags.Variable)
  ) {
    return false;
  }
  const declaration = ts.findAncestor(identifier, ts.isImportDeclaration)!;
  const moduleName = (declaration.moduleSpecifier as ts.StringLiteral).text;
  if (
    declaration.importClause?.name ||
    identifier.parent.parent.elements.some((element) => element.propertyName?.text === identifier.text)
  ) {
    return false;
  }
  const importSymbol = checker.getSymbolAtLocation(identifier);
  if (!importSymbol) {
    return false;
  }
  function referencesImport(node: ts.Identifier): boolean {
    // Shorthand names resolve to the object literal property, not the binding they read.
    const symbol = ts.isShorthandPropertyAssignment(node.parent)
      ? checker.getShorthandAssignmentValueSymbol(node.parent)
      : checker.getSymbolAtLocation(node);
    if (symbol) {
      return symbol === importSymbol;
    }
    // Unresolved names are treated as references unless they cannot refer to a binding, e.g. properties of `any`.
    return !(ts.isPropertyAccessExpression(node.parent) && node.parent.name === node);
  }
  let used = false;
  let safe = true;
  function visit(node: ts.Node) {
    // Other references to the package may consume the export through another binding.
    if (ts.isStringLiteralLike(node) && node.text === moduleName && node.parent !== declaration) {
      safe = false;
    }
    if (
      ts.isCallExpression(node) &&
      (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
        (ts.isIdentifier(node.expression) && node.expression.text === 'require'))
    ) {
      const argument = node.arguments[0];
      if (!argument || !ts.isStringLiteralLike(argument) || argument.text === moduleName) {
        safe = false;
      }
    }
    if (
      ts.isIdentifier(node) &&
      node.text === identifier.text &&
      !ts.findAncestor(node, ts.isImportDeclaration) &&
      referencesImport(node)
    ) {
      used = true;
      safe = safe && isStablePropertyPath(node, change);
    }
    if (safe) {
      ts.forEachChild(node, visit);
    }
  }
  visit(sourceFile);
  return safe && used;
}

function isStablePropertyPath(identifier: ts.Identifier, change: Change): boolean {
  const checkers = [change.prevProgram.getTypeChecker(), change.currentProgram.getTypeChecker()];
  let types = [change.prev, change.current].map((symbol, index) =>
    checkers[index].getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
  );
  if (
    types.some((type) => !(type.flags & ts.TypeFlags.Object)) ||
    [change.prev, change.current].some(
      (symbol, index) => !isPlainPathType((symbol.valueDeclaration as ts.VariableDeclaration)?.type, checkers[index])
    )
  ) {
    return false;
  }
  let expression: ts.Node = identifier;
  while (types.every((type) => type.flags & ts.TypeFlags.Object)) {
    const access = expression.parent;
    if (!ts.isPropertyAccessExpression(access) || access.expression !== expression || access.questionDotToken) {
      return false;
    }
    const members = types.map((type, index) => checkers[index].getPropertyOfType(type, access.name.text));
    const declarations = members.map((member) => member?.valueDeclaration ?? member?.declarations?.[0]);
    if (
      members.some((member) => !member || member.flags & (ts.SymbolFlags.Optional | ts.SymbolFlags.Transient)) ||
      declarations.some(
        (node, index) =>
          !node ||
          !(ts.isPropertySignature(node) || ts.isPropertyDeclaration(node)) ||
          !isPlainPathType(node.type, checkers[index])
      )
    ) {
      return false;
    }
    const modifiers = declarations.map((node) => ts.getCombinedModifierFlags(node!));
    if (
      modifiers[0] !== modifiers[1] ||
      modifiers.some((flags) => flags & (ts.ModifierFlags.Private | ts.ModifierFlags.Protected))
    ) {
      return false;
    }
    types = members.map((member, index) => checkers[index].getTypeOfSymbolAtLocation(member!, declarations[index]!));
    expression = access;
  }
  return (
    types[0].flags === types[1].flags &&
    Boolean(types[0].flags & (ts.TypeFlags.String | ts.TypeFlags.Number | ts.TypeFlags.Boolean))
  );
}

function isPlainPathType(node: ts.TypeNode | undefined, checker: ts.TypeChecker): boolean {
  if (!node) {
    return false;
  }
  // Comparison programs disable strictNullChecks, so resolved types alone can hide nullable unions.
  if (!ts.isTypeReferenceNode(node)) {
    return [
      ts.SyntaxKind.StringKeyword,
      ts.SyntaxKind.NumberKeyword,
      ts.SyntaxKind.BooleanKeyword,
      ts.SyntaxKind.TypeLiteral,
    ].includes(node.kind);
  }
  let symbol = checker.getSymbolAtLocation(node.typeName);
  if (symbol?.flags & ts.SymbolFlags.Alias) {
    symbol = checker.getAliasedSymbol(symbol);
  }
  return Boolean(symbol?.flags & (ts.SymbolFlags.Class | ts.SymbolFlags.Interface));
}
