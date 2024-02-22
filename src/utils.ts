import fs from 'fs';
import path from 'path';
import os from 'os';
import { IgnoreExportChanges } from './types.js';

export function pathExists(path: string): Promise<boolean> {
  return new Promise((resolve) => {
    fs.access(path, fs.constants.R_OK, (err) => {
      resolve(!err);
    });
  });
}

/**
 * The  format of a levignore.js file is:
 *
 * {
 *  "removals": [
 *    // each entry is a regex
 *    /Sample\.ignoreThisOne/,
 *    /Sample\.ignoreThisOneToo/,
 *    /Sample.*\b/,
 *    "Sample.ignoreThisOneToo" // strings are converted to regex to match exact
 *  ],
 *  "changes": [
 *    //...
 *  ],
 *  "additions": [
 *    //...
 *  ]
 * }
 *
 *
 */
export async function readLevignoreFile(cwdPath: string): Promise<IgnoreExportChanges> {
  const levignoreFilePath = path.join(cwdPath, '.levignore.js');
  try {
    const stat = await fs.promises.stat(levignoreFilePath);
    // no levignore file
    if (!stat.isFile()) {
      return {};
    }

    /**
     * Levitate was converted to ESM, commonjs files require a '.cjs' extension for imports.
     * Since 'levignore' was originally a commonjs import, we create a temporary '.cjs' copy to maintain compatibility.
     */
    const tempFile = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'levitate')), 'levignore.cjs');
    fs.copyFileSync(levignoreFilePath, tempFile);

    const levignoreFileContent = await import(tempFile);
    if (!levignoreFileContent.default) {
      return {};
    }

    return {
      additions: parseLevitateFileSection(levignoreFileContent.default.additions),
      changes: parseLevitateFileSection(levignoreFileContent.default.changes),
      removals: parseLevitateFileSection(levignoreFileContent.default.removals),
    };
  } catch (e) {
    return {};
  }
}
function parseLevitateFileSection(entries?: Array<RegExp | string>): RegExp[] {
  if (!entries) {
    return [];
  }
  return (
    entries
      // convert strings into regexes, ignore the ones that are not valid
      .map((entry) => {
        if (entry instanceof RegExp) {
          return entry;
        }
        if (typeof entry === 'string') {
          return new RegExp(entry.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        }
        return null;
      })
      // filter out the nulls
      .filter((entry) => entry !== null)
  );
}

export function readJsonFile(path: string): any {
  const content = fs.readFileSync(path);
  return JSON.parse(content.toString());
}
