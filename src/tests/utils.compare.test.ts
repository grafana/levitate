import path from "path";
import fs from "fs";
import { compareExports } from "../utils.compare";
import { Comparison } from "../types";

const TMP_DIR = path.join(__dirname, "..", "..", ".tmp");

describe("Compare", () => {
  describe("variables", () => {
    test("changing a variable should be recorded as a change", () => {
      const prev = `export const foo = "bar";`;
      const current = `export const foo = "zed";`;
      const comparison = testCompare(prev, current);

      // Only "changes" are found
      expect(Object.keys(comparison.changes)).toEqual(["foo"]);
      expect(Object.keys(comparison.additions).length).toBe(0);
      expect(Object.keys(comparison.removals).length).toBe(0);
    });
  });
});

// As `compareExports()` only works on existing files, we have created this
// utility to persist the contents in temporary files
function testCompare(prevContent: string, currentContent: string): Comparison {
  const prevFilename = generateTmpFilename();
  const currentFilename = generateTmpFilename();

  if (!fs.existsSync(TMP_DIR)) {
    fs.mkdirSync(TMP_DIR);
  }

  fs.writeFileSync(prevFilename, prevContent);
  fs.writeFileSync(currentFilename, currentContent);

  const comparison = compareExports(prevFilename, currentFilename);

  fs.unlinkSync(prevFilename);
  fs.unlinkSync(currentFilename);

  return comparison;
}

function generateTmpFilename() {
  return path.join(TMP_DIR, `${generateHash()}.ts`);
}

function generateHash() {
  return (Math.random() + 1).toString(36).substring(2);
}
