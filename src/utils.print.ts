import { Comparison, Exports, ExportsInfo, ImportInfo } from "./types";
import { debug } from "./utils.log";
import { areChangesBreaking } from "./utils.compare";

export function printComparison({ changes, additions, removals }: Comparison) {
  debug("Printing results...");

  const objToPrint = {
    isBreaking: areChangesBreaking({ changes, additions, removals }),

    // Show name and textual "value" of added members
    additions: Object.keys(additions).map((name) => ({
      name,
      value: additions[name].declarations[0].getText(),
    })),

    // Only showing the names of the changed members currently
    changes: Object.keys(changes),

    // Only showing the names of the removed members currently
    removals: Object.keys(removals),
  };

  console.log("");
  console.log("===================================");
  console.log(JSON.stringify(objToPrint, null, 4));
  console.log("===================================");
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
