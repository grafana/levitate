import { ExportsInfo } from '../types.js';
import { logDebug, logInfo } from '../utils/log.js';

export function printExports(exports: ExportsInfo) {
  logDebug('Printing results...');

  logInfo('');
  logInfo('List of exported members:');
  logInfo('===================================');
  logInfo(Object.keys(exports.exports).forEach((name) => logInfo(`\t - ${name}`)));
  logInfo('===================================');
}

export function indentLines(str: string, tabsCount: number) {
  return str.split('\n').reduce((acc, line) => `${acc}${indentLine(line, tabsCount)}\n`, '');
}

export function indentLine(str: string, count: number) {
  let tabs = '';

  for (let i = 0; i < count; i++) {
    tabs += '\t';
  }

  return `${tabs}${str}`;
}
