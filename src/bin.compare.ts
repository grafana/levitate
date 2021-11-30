import { debug } from "./utils.log";
import { hasChanged } from "./utils.compare";
import { getExportInfo } from "./utils.compiler";
import { printComparison } from "./utils.print";

run();

function run() {
  const [oldFile, newFile] = process.argv.slice(2);
  compareExports(oldFile, newFile);
}

function compareExports(oldRootFile: string, newRootFile: string): void {
  debug("Old filename: %o", oldRootFile);
  debug("New filename: %o", newRootFile);

  const prev = getExportInfo(oldRootFile);
  const current = getExportInfo(newRootFile);
  const additions = {};
  const removals = {};
  const changes = {};

  debug("Previous file: %o exports", Object.keys(prev.exports).length);
  debug("Current file: %o exports", Object.keys(current.exports).length);

  // Look for changes introduced by the current version
  for (const [exportName, exportSymbol] of Object.entries(current.exports)) {
    // Addition
    if (!prev.exports[exportName]) {
      additions[exportName] = exportSymbol;

      // Change
    } else {
      if (
        hasChanged(
          { key: exportName, symbol: prev.exports[exportName] },
          { key: exportName, symbol: exportSymbol }
        )
      ) {
        changes[exportName] = exportSymbol;
      }
    }
  }

  // Look for removals
  for (const [exportName, exportSymbol] of Object.entries(prev.exports)) {
    // Removal
    if (!current.exports[exportName]) {
      removals[exportName] = exportSymbol;
    }
  }

  printComparison({ changes, additions, removals });
}
