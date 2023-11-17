import path from 'path';
import fs from 'fs';
import { tmpdir } from 'os';

export const TMP_DIR = fs.mkdtempSync(path.join(tmpdir(), 'levitate-test'));

export function generateTmpFilename() {
  return path.join(TMP_DIR, `${generateHash()}.ts`);
}

export function generateTmpFileWithContent(content: string) {
  const filename = generateTmpFilename();
  fs.writeFileSync(filename, content);
  return filename;
}

export function generateHash() {
  return (Math.random() + 1).toString(36).substring(2);
}
