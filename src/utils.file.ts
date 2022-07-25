import fs from 'fs';
import { logError } from './utils.log';

export function pathExists(path: string): boolean {
  try {
    fs.accessSync(path, fs.constants.R_OK);
    return true;
  } catch (e) {
    return false;
  }
}
