import chalk from "chalk";
import Table from "tty-table";
import { Changes, Comparison, Exports } from "./types";
import { debug } from "./utils.log";
import { areChangesBreaking } from "./utils.compare";
import { indentLines } from "./utils.print";
import { getDiff } from "./utils.diff";

export function printComparison({ changes, additions, removals }: Comparison) {
  debug("Printing results...");
  const isBreaking = areChangesBreaking({ changes, additions, removals });

  printAdditions(additions);
  printRemovals(removals);
  printChanges(changes);
  printVerdict(isBreaking);
}

function printAdditions(additions: Exports) {
  const count = Object.keys(additions).length;

  printSpacing(2);
  printHeading(chalk.green(`ADDITIONS (${count})`));

  if (!count) {
    console.log("No additions.");
    return;
  }

  const table = Table(
    [
      { value: "Property", width: 30, align: "left", headerAlign: "left" },
      { value: "Location", width: 40, align: "left", headerAlign: "left" },
      { value: "Declaration", width: 90, align: "left", headerAlign: "left" },
    ],
    // @ts-ignore
    [
      ...Object.keys(additions).map((name) => [
        chalk.green.bold(name),
        chalk.white(additions[name].declarations[0].getSourceFile().fileName),
        chalk.gray(additions[name].declarations[0].getText()),
      ]),
    ]
  );

  console.log(table.render());
}

function printRemovals(removals: Exports) {
  const count = Object.keys(removals).length;

  printSpacing(2);
  printHeading(chalk.red(`REMOVALS (${count})`));

  if (!count) {
    console.log("No removals.");
    return;
  }

  const table = Table(
    [
      { value: "Property", width: 30, align: "left", headerAlign: "left" },
      { value: "Previous location", width: 40, align: "left", headerAlign: "left" },
      { value: "Declaration", width: 90, align: "left", headerAlign: "left" },
    ],
    // @ts-ignore
    [
      ...Object.keys(removals).map((name) => [
        chalk.red.bold(name),
        chalk.white(removals[name].declarations[0].getSourceFile().fileName),
        chalk.gray(removals[name].declarations[0].getText()),
      ]),
    ]
  );

  console.log(table.render());
}

function printChanges(changes: Changes) {
  const count = Object.keys(changes).length;

  printSpacing(2);
  printHeading(chalk.yellow(`CHANGES (${count})`));

  if (!count) {
    console.log("No changes.");
  }

  const table = Table(
    [
      { value: "Property", width: 30, align: "left", headerAlign: "left" },
      { value: "Location", width: 40, align: "left", headerAlign: "left" },
      { value: "Diff", width: 90, align: "left", headerAlign: "left" },
    ],
    // @ts-ignore
    [
      ...Object.keys(changes).map((name) => {
        const prevDeclaration = changes[name].prev.declarations[0].getText();
        const currentDeclaration = changes[name].current.declarations[0].getText();

        return [
          chalk.yellow.bold(name),
          chalk.white(changes[name].current.declarations[0].getSourceFile().fileName),
          getDiff(prevDeclaration, currentDeclaration),
        ];
      }),
    ]
  );

  console.log(table.render());
}

function printVerdict(isBreaking: boolean) {
  if (isBreaking) {
    printSpacing(2);
    printRedLabel("FAIL");
    console.log(chalk.bold.red("There were possible breaking changes, please check the differences.\n\n"));

    return;
  }

  printSpacing(2);
  printGreenLabel("SUCCESS");
  console.log(chalk.bold.green("There were no breaking changes introduced.\n\n"));
}

function printGreenLabel(text: string) {
  console.log(chalk.bgGreen.bold.white(` ${text} `));
}

// 🥃
function printRedLabel(text: string) {
  console.log(chalk.bgRed.bold.white(` ${text} `));
}

function printHeading(text: string, description?: string) {
  console.log(chalk.bold(`  ${text}`));

  if (description) {
    console.log(chalk.gray(description));
  }
}

function printSpacing(count?: number) {
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      console.log("");
    }
  } else {
    console.log("");
  }
}
