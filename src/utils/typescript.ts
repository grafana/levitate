import ts, { Modifier, NodeArray } from '@tsd/typescript';

export const COMPILER_OPTIONS = {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS,
  jsx: ts.JsxEmit.React,
  allowJs: true,
  esModuleInterop: true,
};

/**
 * Given a source file or node it returns all identifiers in the source file or node.
 */
export function getAllIdentifiers(node: ts.Node | ts.SourceFile): ts.Identifier[] {
  const identifiers: ts.Identifier[] = [];
  ts.forEachChild(node, (childNode) => {
    if (ts.isIdentifier(childNode)) {
      identifiers.push(childNode);
    }
    identifiers.push(...getAllIdentifiers(childNode));
  });
  return identifiers;
}

export function getAllPropertyAccessExpressions(node: ts.Node | ts.SourceFile): ts.PropertyAccessExpression[] {
  const expresssions: ts.PropertyAccessExpression[] = [];
  ts.forEachChild(node, (childNode) => {
    if (ts.isPropertyAccessExpression(childNode)) {
      expresssions.push(childNode);
    }
    expresssions.push(...getAllPropertyAccessExpressions(childNode));
  });
  return expresssions;
}

export function getSymbolFromParameter(node: ts.ParameterDeclaration, program: ts.Program): ts.Symbol | undefined {
  if (program && Object.hasOwnProperty.call(node, 'type') && ts.isTypeReferenceNode(node.type)) {
    return program.getTypeChecker().getSymbolAtLocation(node.type.typeName);
  }

  if (Object.hasOwnProperty.call(node, 'symbol')) {
    // seems to be an untyped ts property
    // @ts-expect-error
    return node.symbol as ts.Symbol;
  }

  return undefined;
}

export function createTsProgram(fileName: string, compilerOptions: ts.CompilerOptions = {}): ts.Program {
  const program = ts.createProgram([fileName], {
    ...COMPILER_OPTIONS,
    ...compilerOptions,
  });

  program.getTypeChecker();

  return program;
}

export function isSymbolPrivateDeclaration(symbol: ts.Symbol): boolean {
  try {
    // properties defined with '#' before the name are private fields
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
    if (
      symbol.flags === ts.SymbolFlags.Property &&
      (symbol.getName().startsWith('#') || symbol.escapedName.toString().startsWith('__#'))
    ) {
      return true;
    }

    // private or protected properties or methods
    if (
      (symbol.valueDeclaration,
      ts.isPropertyDeclaration(symbol.valueDeclaration) || ts.isMethodDeclaration(symbol.valueDeclaration)) &&
      'modifiers' in symbol.valueDeclaration
    ) {
      return (
        (symbol.valueDeclaration.modifiers as NodeArray<Modifier>)?.some(
          (modifier) =>
            modifier.kind === ts.SyntaxKind.PrivateKeyword || modifier.kind === ts.SyntaxKind.ProtectedKeyword
        ) ?? false
      );
    }
    return false;
  } catch (e) {
    return false;
  }
}
