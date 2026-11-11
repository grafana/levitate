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

const PRIMITIVE_TYPE_FLAGS = ts.TypeFlags.String | ts.TypeFlags.Number | ts.TypeFlags.Boolean;
const PLAIN_TYPE_NODE_KINDS = [
  ts.SyntaxKind.StringKeyword,
  ts.SyntaxKind.NumberKeyword,
  ts.SyntaxKind.BooleanKeyword,
  ts.SyntaxKind.TypeLiteral,
];

function usesOnlyStableProperties(
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
  identifier: ts.Identifier,
  change: Change
): boolean {
  const importDeclaration = getPlainNamedImportDeclaration(identifier);
  const importSymbol = checker.getSymbolAtLocation(identifier);
  if (!importDeclaration || !importSymbol || !isVariableInBothVersions(change)) {
    return false;
  }
  const moduleName = (importDeclaration.moduleSpecifier as ts.StringLiteral).text;

  let used = false;
  let safe = true;
  function visit(node: ts.Node) {
    if (referencesModuleOutside(node, moduleName, importDeclaration!)) {
      safe = false;
    } else if (ts.isIdentifier(node) && referencesImport(checker, node, importSymbol!)) {
      used = true;
      safe = isStablePropertyPath(node, change);
    }
    if (safe) {
      ts.forEachChild(node, visit);
    }
  }
  visit(sourceFile);
  return safe && used;
}

function getPlainNamedImportDeclaration(identifier: ts.Identifier): ts.ImportDeclaration | undefined {
  const specifier = identifier.parent;
  if (!ts.isImportSpecifier(specifier) || specifier.propertyName) {
    return undefined;
  }
  const declaration = ts.findAncestor(specifier, ts.isImportDeclaration)!;
  const hasDefaultImport = Boolean(declaration.importClause?.name);
  const isAlsoImportedUnderAlias = specifier.parent.elements.some(
    (element) => element.propertyName?.text === identifier.text
  );
  return hasDefaultImport || isAlsoImportedUnderAlias ? undefined : declaration;
}

function isVariableInBothVersions(change: Change): boolean {
  return Boolean(change.prev.flags & ts.SymbolFlags.Variable && change.current.flags & ts.SymbolFlags.Variable);
}

function referencesModuleOutside(node: ts.Node, moduleName: string, importDeclaration: ts.ImportDeclaration): boolean {
  if (ts.isStringLiteralLike(node)) {
    return node.text === moduleName && node.parent !== importDeclaration;
  }
  if (!isDynamicImportOrRequire(node)) {
    return false;
  }
  const argument = node.arguments[0];
  return !argument || !ts.isStringLiteralLike(argument) || argument.text === moduleName;
}

function isDynamicImportOrRequire(node: ts.Node): node is ts.CallExpression {
  return (
    ts.isCallExpression(node) &&
    (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
      (ts.isIdentifier(node.expression) && node.expression.text === 'require'))
  );
}

function referencesImport(checker: ts.TypeChecker, node: ts.Identifier, importSymbol: ts.Symbol): boolean {
  if (node.text !== importSymbol.name || ts.findAncestor(node, ts.isImportDeclaration)) {
    return false;
  }
  const symbol = ts.isShorthandPropertyAssignment(node.parent)
    ? checker.getShorthandAssignmentValueSymbol(node.parent)
    : checker.getSymbolAtLocation(node);
  if (symbol) {
    return symbol === importSymbol;
  }
  return !isPropertyAccessName(node);
}

function isPropertyAccessName(node: ts.Identifier): boolean {
  return ts.isPropertyAccessExpression(node.parent) && node.parent.name === node;
}

function isStablePropertyPath(identifier: ts.Identifier, change: Change): boolean {
  const prevChecker = change.prevProgram.getTypeChecker();
  const currentChecker = change.currentProgram.getTypeChecker();
  let prevType = getPlainObjectVariableType(prevChecker, change.prev);
  let currentType = getPlainObjectVariableType(currentChecker, change.current);
  if (!prevType || !currentType) {
    return false;
  }

  let expression: ts.Node = identifier;
  while (isObjectType(prevType) && isObjectType(currentType)) {
    const access = getPlainPropertyAccess(expression);
    if (!access) {
      return false;
    }
    const prevMember = getPlainMember(prevChecker, prevType, access.name.text);
    const currentMember = getPlainMember(currentChecker, currentType, access.name.text);
    if (!prevMember || !currentMember || prevMember.modifiers !== currentMember.modifiers) {
      return false;
    }
    prevType = prevMember.type;
    currentType = currentMember.type;
    expression = access;
  }
  return prevType.flags === currentType.flags && Boolean(prevType.flags & PRIMITIVE_TYPE_FLAGS);
}

function getPlainObjectVariableType(checker: ts.TypeChecker, symbol: ts.Symbol): ts.Type | undefined {
  const declaration = symbol.valueDeclaration as ts.VariableDeclaration;
  const type = checker.getTypeOfSymbolAtLocation(symbol, declaration);
  return isObjectType(type) && isPlainTypeNode(checker, declaration?.type) ? type : undefined;
}

function isObjectType(type: ts.Type): boolean {
  return Boolean(type.flags & ts.TypeFlags.Object);
}

function getPlainPropertyAccess(expression: ts.Node): ts.PropertyAccessExpression | undefined {
  const access = expression.parent;
  const isPlainAccess =
    ts.isPropertyAccessExpression(access) && access.expression === expression && !access.questionDotToken;
  return isPlainAccess ? access : undefined;
}

function getPlainMember(
  checker: ts.TypeChecker,
  type: ts.Type,
  name: string
): { type: ts.Type; modifiers: ts.ModifierFlags } | undefined {
  const member = checker.getPropertyOfType(type, name);
  if (!member || member.flags & (ts.SymbolFlags.Optional | ts.SymbolFlags.Transient)) {
    return undefined;
  }
  const declaration = member.valueDeclaration ?? member.declarations?.[0];
  if (
    !declaration ||
    !(ts.isPropertySignature(declaration) || ts.isPropertyDeclaration(declaration)) ||
    !isPlainTypeNode(checker, declaration.type)
  ) {
    return undefined;
  }
  const modifiers = ts.getCombinedModifierFlags(declaration);
  if (modifiers & (ts.ModifierFlags.Private | ts.ModifierFlags.Protected)) {
    return undefined;
  }
  return { type: checker.getTypeOfSymbolAtLocation(member, declaration), modifiers };
}

function isPlainTypeNode(checker: ts.TypeChecker, node: ts.TypeNode | undefined): boolean {
  if (!node) {
    return false;
  }
  if (!ts.isTypeReferenceNode(node)) {
    return PLAIN_TYPE_NODE_KINDS.includes(node.kind);
  }
  let symbol = checker.getSymbolAtLocation(node.typeName);
  if (symbol && symbol.flags & ts.SymbolFlags.Alias) {
    symbol = checker.getAliasedSymbol(symbol);
  }
  return Boolean(symbol && symbol.flags & (ts.SymbolFlags.Class | ts.SymbolFlags.Interface));
}
