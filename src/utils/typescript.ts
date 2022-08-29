import ts from 'typescript';

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

export function getSymbolFromParameter(node: ts.ParameterDeclaration, program: ts.Program): ts.Symbol | undefined {
  if (Object.hasOwnProperty.call(node, 'type') && ts.isTypeReferenceNode(node.type)) {
    return program.getTypeChecker().getSymbolAtLocation(node.type.typeName);
  }

  if (Object.hasOwnProperty.call(node, 'symbol')) {
    // seems to be an untyped ts property
    // @ts-expect-error
    return node.symbol as ts.Symbol;
  }

  return undefined;
}

export function createProgram(fileName: string): ts.Program {
  const program = ts.createProgram([fileName], COMPILER_OPTIONS);

  program.getTypeChecker();

  return program;
}
