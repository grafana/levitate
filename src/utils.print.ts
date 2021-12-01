import * as colors from "colors/safe";
import * as printDiff from "print-diff";
import { Comparison, ExportsInfo, ImportInfo } from "./types";
import { debug } from "./utils.log";
import { areChangesBreaking } from "./utils.compare";

export function printComparison({ changes, additions, removals }: Comparison) {
  debug("Printing results...");
  const isBreaking = areChangesBreaking({ changes, additions, removals });

  if (isBreaking) {
    console.log(colors.red("Breaking changes!\n\n"));
  } else {
    console.log(colors.bold("All is good.\n\n"));
  }

  console.log("ADDITIONS");
  console.log("===================================");
  Object.keys(additions).forEach((name) => {
    console.log(`\t ${name}`);
    console.log(
      colors.grey(indent(additions[name].declarations[0].getText(), 2))
    );
    console.log("");
  });
  console.log("");
  console.log("");

  console.log("REMOVALS");
  console.log("===================================");
  if (!Object.keys(removals).length) {
    console.log("No removals.");
  }
  Object.keys(removals).forEach((name) => {
    console.log(`\t ${name}`);
    console.log(colors.grey(`\t ${removals[name].declarations[0].getText()}`));
    console.log("");
  });
  console.log("");
  console.log("");

  console.log("CHANGES");
  console.log("===================================");
  Object.keys(changes).forEach((name) => {
    const prevDeclaration = changes[name].prev.declarations[0].getText();
    const currentDeclaration = changes[name].current.declarations[0].getText();
    console.log(`\t ${name}`);
    console.log("");

    if (prevDeclaration === currentDeclaration) {
      console.log(`\t\t No changes!`);
    } else {
      printDiff(currentDeclaration, prevDeclaration);
    }
    console.log("");
  });
}

export function printImports({
  imports,
  isVerbose = false,
  isJson = false,
}: {
  imports: ImportInfo[];
  // Will also print the occurances if set to true
  isVerbose?: boolean;
  // Will print it as a valid JSON string representation if set to true
  isJson?: boolean;
}) {
  if (isJson) {
    console.log(JSON.stringify(imports, null, 4));
  } else {
    // Group the imports by packages
    const importsByPackageName: Record<string, ImportInfo[]> = {};
    imports.forEach((i) => {
      if (importsByPackageName[i.packageName]) {
        importsByPackageName[i.packageName] = [
          ...importsByPackageName[i.packageName],
          i,
        ];
      } else {
        importsByPackageName[i.packageName] = [i];
      }
    });

    // Loop through all the packages
    Object.keys(importsByPackageName).forEach((packageName) => {
      console.log("");
      console.log(packageName);
      console.log("===============================");

      // Loop through all the imports from a certain package
      importsByPackageName[packageName].forEach((i) => {
        const name = i.isDefaultImport ? "default" : i.propertyName;

        console.log(`\t ${name} (${i.count} occurances)`);

        if (isVerbose) {
          i.occurances.forEach((ii) => {
            console.log(`\t\t Filename: ${ii.fileName}`);
            console.log(`\t\t Import statement: ${ii.importStatementAsText}`);
            console.log("");
          });
        }
      });
    });
  }
}

export function printExports(exports: ExportsInfo) {
  debug("Printing results...");

  console.log("");
  console.log("List of exported members:");
  console.log("===================================");
  console.log(
    Object.keys(exports.exports).forEach((name) => console.log(`\t - ${name}`))
  );
  console.log("===================================");
}

export function indent(str: string, tabsCount: number) {
  let output = "";

  str.split("\n").map((line) => {
    output += `${getTabs(tabsCount)}${line}\n`;
  });

  return output;
}

export function getTabs(count: number) {
  let tabs = "";

  for (let i = 0; i < count; i++) {
    tabs += "\t";
  }

  return tabs;
}
