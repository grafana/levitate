import ts from '@tsd/typescript';
import { ImportInfo, ImportsInfo } from '../types.js';
import { createTsProgram } from '../utils/typescript.js';

export function getImportsInfo(rootFile: string, filters?: string[]): ImportsInfo {
  const program = createTsProgram(rootFile);
  const programImports = getImportsForProgram(program, filters);

  return {
    imports: programImports,
    program,
  };
}

export function getImportsForProgram(program: ts.Program, filters?: string[]): ImportInfo[] {
  let imports = [];

  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      imports = [...imports, ...getImportsForFile(sourceFile, filters)];
    }
  }

  return imports;
}

export function getImportsForFile(
  sourceFile: ts.SourceFile,
  // A list of package names that we would like to filter for
  filters?: string[]
): ImportInfo[] {
  let imports = [];

  ts.forEachChild(sourceFile, (node) => visit(node));

  return imports;

  // Checks if an import matches any of the provided package names
  function doesMatchFilters(packageName: string) {
    return filters ? filters.some((filter) => packageName === filter) : true;
  }

  function visit(node: ts.Node) {
    if (ts.isImportDeclaration(node) && doesMatchFilters(getImportPackageName(node))) {
      imports = [...imports, ...getImportsForNode(node, sourceFile.fileName)];
    }

    // This is a namespace, visit its children
    if (ts.isModuleDeclaration(node)) {
      ts.forEachChild(node, (node) => visit(node));
    }
  }
}

// A single import declaration can contain both named and default imports
export function getImportsForNode(node: ts.ImportDeclaration, fileName: string): ImportInfo[] {
  const imports = [];
  const packageName = getImportPackageName(node);
  const namedImports = getNamedImportsForNode(node);
  const isDefaultImport = isNodeADefaultImport(node);
  const importStatementAsText = node.getText();

  if (namedImports.length) {
    namedImports.forEach((propertyName) => {
      imports.push({
        packageName,
        isNamedImport: true,
        isDefaultImport: false,
        propertyName,
        fileName,
        importStatementAsText,
      });
    });
  }

  if (isDefaultImport) {
    imports.push({
      packageName,
      isNamedImport: false,
      isDefaultImport: true,
      fileName,
      importStatementAsText,
    });
  }

  return imports;
}

export function getNamedImportsForNode(node: ts.ImportDeclaration): string[] {
  const namedBindings = node.importClause.namedBindings as ts.NamedImports;

  if (namedBindings && namedBindings.elements) {
    return namedBindings.elements.map((e) => e.getText());
  }

  return [];
}

export function isNodeADefaultImport(node: ts.ImportDeclaration): boolean {
  return Boolean(node.importClause.name);
}

export function getImportPackageName(node: ts.ImportDeclaration) {
  return node.moduleSpecifier.getText().replace(/'/g, '').replace(/"/g, '');
}

// Returns a grouped list of imports
// (The list will only include each named import from a package once, but will also contain the occurances)
export function getGroupedImports(imports: ImportInfo[]): ImportInfo[] {
  const groupedImports: ImportInfo[] = [];
  const getGroupedImport = (i: ImportInfo) =>
    groupedImports.find((gi) => {
      if (i.isDefaultImport) {
        return gi.isDefaultImport === true && gi.packageName === i.packageName;
      }

      return gi.propertyName === i.propertyName && gi.packageName === i.packageName;
    });

  // Looping through all the imports
  for (const i of imports) {
    const groupedImport = getGroupedImport(i);

    // Increment count and add occurance
    if (groupedImport) {
      groupedImport.count += 1;
      groupedImport.occurances = [...groupedImport.occurances, i];

      // Register the import to the grouped list
    } else {
      groupedImports.push({
        ...i,
        occurances: [i],
        count: 1,
      });
    }
  }

  return groupedImports;
}
