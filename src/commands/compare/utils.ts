import fs from 'fs';
import { generateTmpFilename, TMP_DIR } from '../../tests/test-utils';
import { Comparison } from '../../types';
import { pathExists } from '../../utils/file';
import { compareExports } from './compare';

// As `compareExports()` only works on existing files, we have created this
// utility to persist the contents in temporary files
export function testCompare(prevContent: string, currentContent: string): Comparison {
  const prevFilename = generateTmpFilename();
  const currentFilename = generateTmpFilename();

  if (!pathExists(TMP_DIR)) {
    fs.mkdirSync(TMP_DIR);
  }

  fs.writeFileSync(prevFilename, prevContent);
  fs.writeFileSync(currentFilename, currentContent);

  const comparison = compareExports(prevFilename, currentFilename);

  fs.unlinkSync(prevFilename);
  fs.unlinkSync(currentFilename);

  return comparison;
}
