import * as diff from "diff";
import chalk from "chalk";

function getDiffLegend() {
  return "\n" + chalk.green("+ Added") + " " + chalk.red("- Removed") + "\n" + "\n";
}

export function getDiff(prev, current) {
  const patch = diff.createPatch("string", prev, current);
  const lines = patch
    .split("\n")
    .slice(4)
    .map(getDiffForLine)
    .filter((line) => line !== null);

  return getDiffLegend() + lines.join("\n") + "\n";
}

function getDiffForLine(line) {
  switch (line[0]) {
    // Added lines
    case "+":
      return chalk.green(line);
    // Removed lines
    case "-":
      return chalk.red(line);
    case " ":
      return line;
    case "@":
      return null;
    case "\\":
      return null;
  }
}
