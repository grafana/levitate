import * as diff from "diff";
import * as colors from "colors/safe";

function getDiffLegend() {
  return (
    "\n" +
    colors.bgGreen("+ Added") +
    " " +
    colors.bgRed("- Removed") +
    "\n" +
    "\n"
  );
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
      return colors.bgGreen(line);
    // Removed lines
    case "-":
      return colors.bgRed(line);
    case " ":
      return line;
    case "@":
      return null;
    case "\\":
      return null;
  }
}
