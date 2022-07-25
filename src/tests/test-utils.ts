import path from 'path';
import fs from 'fs';
import rimraf from 'rimraf';
import { compareExports } from '../utils.compare';
import { pathExists } from '../utils.file';
import { Comparison } from '../types';

export const TMP_DIR = path.join(__dirname, '..', '..', '.tmp');

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

export function generateTmpFilename() {
  return path.join(TMP_DIR, `${generateHash()}.ts`);
}

export function generateHash() {
  return (Math.random() + 1).toString(36).substring(2);
}

export function removeTmpDir() {
  rimraf.sync(TMP_DIR);
}
