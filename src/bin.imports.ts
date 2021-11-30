import * as ts from "typescript";
import * as fs from "fs";
import getDebug from "debug";

interface ResolvedSourceFile extends ts.SourceFile {
  resolvedModules?: Map<string, ts.ResolvedModuleFull | undefined>;
}

const imports = [];

run();

function run() {
  const [file] = process.argv.slice(2);
  getImports(file);

  const imports2 = imports.sort().reduce((prev, curr) => {
    curr.namedImports.map((namedImport) => {
      if (prev[namedImport]) {
        prev[namedImport] += 1;
      } else {
        prev[namedImport] = 1;
      }
    });

    return prev;
  }, {});
  console.log(JSON.stringify(imports2, null, 4));
}

function getImports(fileName: string) {
  const moduleName = "@grafana/data";
  let program = ts.createProgram([fileName], {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
    jsx: ts.JsxEmit.React,
    allowJs: true,
    esModuleInterop: true,
  });
  let checker = program.getTypeChecker();
  let allExports = {};

  for (const sourceFile of program.getSourceFiles()) {
    // console.log(sourceFile.fileName)
    // console.log(sourceFile.fileName);
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree to search for classes
      ts.forEachChild(sourceFile, (node) => visit(node, sourceFile.fileName));
    }
  }

  function visit(node: ts.Node, fileName: string) {
    // console.log(node.getText());
    // console.log('SynatxKind:', node.kind)
    // console.log('---------------------');
    // TODO: check if this is also working for CommonJS syntax
    // if (node.kind === ts.SyntaxKind.ExpressionStatement) {
    //   console.log('-- EXPRESSION STATEMENT ------------------')
    //   console.log(node.getText())
    //   console.log('')
    // }

    // if (ts.isImportClause(node)) {
    //   console.log('-- IMPORT CLAUSE ------------------')
    //   console.log(node.getText())
    //   console.log('')
    // }

    if (ts.isImportEqualsDeclaration(node)) {
      console.log("-- IMPORT EQUALS DECLARATOIN ------------------");
      console.log(node.getText());
      console.log("");
    }

    if (ts.isImportSpecifier(node)) {
      console.log("-- IMPORT SPECIFIER ------------------");
      console.log(node.getText());
      console.log("");
    }

    if (ts.isImportDeclaration(node)) {
      const importObj = {
        import: node.getText(),
        from: node.moduleSpecifier
          .getText()
          .replace(/'/g, "")
          .replace(/"/g, ""),
        namedImports:
          node.importClause.namedBindings &&
          (node.importClause.namedBindings as ts.NamedImports).elements
            ? (node.importClause.namedBindings as ts.NamedImports).elements.map(
                (e) => e.getText()
              )
            : [],
        // TODO: add an implementation for getting default imports
      };

      if (importObj.from.includes(moduleName)) {
        console.log("-- IMPORT DECLARATION ------------------");
        console.log(node.getText());
        console.log("File: ", fileName);
        console.log("----------------------------------------");
        console.log("");

        imports.push(importObj);
      }

      imports.push();
      ts.forEachChild(node, (node) => visit(node, fileName));
    } else if (ts.isModuleDeclaration(node)) {
      // This is a namespace, visit its children
      ts.forEachChild(node, (node) => visit(node, fileName));
    }
  }
}
