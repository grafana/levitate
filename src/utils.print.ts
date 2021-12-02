import * as colors from "colors/safe";
import { Comparison, ExportsInfo, ImportInfo } from "./types";
import { debug } from "./utils.log";
import { areChangesBreaking } from "./utils.compare";
import { getDiff } from "./utils.diff";

export function printComparison({ changes, additions, removals }: Comparison) {
  debug("Printing results...");
  const isBreaking = areChangesBreaking({ changes, additions, removals });

  console.log("");
  console.log(
    colors.green(colors.bold(` ADDITIONS (${Object.keys(additions).length})`))
  );
  console.log(" Exports that were introduced in the current version.");
  console.log(
    "======================================================================"
  );
  Object.keys(additions).forEach((name) => {
    console.log(
      `\t ${colors.bold(name)} ${colors.gray(
        `(${additions[name].declarations[0].getSourceFile().fileName})`
      )}`
    );
    console.log(
      colors.grey(
        indentLines(colors.bold(additions[name].declarations[0].getText()), 1)
      )
    );
    console.log("");
  });
  console.log("");
  console.log("");

  console.log(
    colors.green(colors.bold(` REMOVALS (${Object.keys(removals).length})`))
  );
  console.log(" Exports that were removed in the current version.");
  console.log(
    "======================================================================"
  );
  if (!Object.keys(removals).length) {
    console.log("No removals.");
  }
  Object.keys(removals).forEach((name) => {
    console.log(
      `\t ${colors.bold(name)} ${colors.gray(
        `(${removals[name].declarations[0].getSourceFile().fileName})`
      )}`
    );
    console.log(colors.grey(`\t ${removals[name].declarations[0].getText()}`));
    console.log("");
  });
  console.log("");
  console.log("");

  console.log(
    colors.green(colors.bold(` CHANGES (${Object.keys(changes).length})`))
  );
  console.log(" Exports that have changed compared to the previous version.");
  console.log(
    "======================================================================"
  );
  if (!Object.keys(changes).length) {
    console.log("No changes.");
  }
  Object.keys(changes).forEach((name) => {
    const prevDeclaration = changes[name].prev.declarations[0].getText();
    const currentDeclaration = changes[name].current.declarations[0].getText();
    console.log(`\t ${colors.bold(name)}`);
    console.log(
      `\t ${colors.gray(
        changes[name].current.declarations[0].getSourceFile().fileName
      )}`
    );
    console.log("");

    if (prevDeclaration === currentDeclaration) {
      console.log(`\t\t No changes!`);
    } else {
      console.log(indentLines(getDiff(prevDeclaration, currentDeclaration), 2));
    }
    console.log("");
  });

  if (isBreaking) {
    console.log("");
    console.log(
      colors.bgRed(colors.bold(colors.white(" FAIL "))) +
        " " +
        colors.bold(
          colors.red(
            "There were possible breaking changes, please check the differences.\n\n"
          )
        )
    );
  } else {
    console.log(colors.bold(colors.green("All is good!\n\n")));
  }
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
      console.log(
        colors.bold(packageName) +
          " " +
          colors.gray(`(${importsByPackageName[packageName].length} imports)`)
      );
      console.log("===============================");

      // Loop through all the imports from a certain package
      importsByPackageName[packageName]
        .sort((a, b) => b.count - a.count)
        .forEach((i) => {
          const name = i.isDefaultImport ? "default" : i.propertyName;

          console.log(
            `\t ${colors.green(colors.bold(name))} ${colors.gray(
              `(${i.count} occurances)`
            )}`
          );

          if (isVerbose) {
            i.occurances.forEach((ii) => {
              console.log(
                `\t\t ${colors.bold(colors.gray("Filename"))}: ${colors.gray(
                  ii.fileName
                )}`
              );
              console.log(
                `\t\t ${colors.gray(
                  colors.bold("Import statement")
                )}: ${colors.gray(ii.importStatementAsText)}`
              );
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

export function indentLines(str: string, tabsCount: number) {
  return str
    .split("\n")
    .reduce((acc, line) => `${acc}${indentLine(line, tabsCount)}\n`, "");
}

export function indentLine(str: string, count: number) {
  let tabs = "";

  for (let i = 0; i < count; i++) {
    tabs += "\t";
  }

  return `${tabs}${str}`;
}
