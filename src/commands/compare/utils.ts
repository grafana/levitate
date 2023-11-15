import fs from 'fs';
import { generateTmpFilename, TMP_DIR } from '../../tests/test-utils.js';
import { Comparison, IgnoreExportChanges } from '../../types.js';
import { pathExists } from '../../utils/file.js';
import { compareExports } from './compare.js';

// As `compareExports()` only works on existing files, we have created this
// utility to persist the contents in temporary files
export function testCompare(
  prevContent: string,
  currentContent: string,
  ignoredExports: IgnoreExportChanges = {}
): Comparison {
  const prevFilename = generateTmpFilename();
  const currentFilename = generateTmpFilename();

  if (!pathExists(TMP_DIR)) {
    fs.mkdirSync(TMP_DIR);
  }

  fs.writeFileSync(prevFilename, prevContent);
  fs.writeFileSync(currentFilename, currentContent);

  const comparison = compareExports(prevFilename, currentFilename, ignoredExports);

  fs.unlinkSync(prevFilename);
  fs.unlinkSync(currentFilename);

  return comparison;
}
