import ts from 'typescript';

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
