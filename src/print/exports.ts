import { ExportsInfo } from '../types';
import { debug } from '../utils/log';

export function printExports(exports: ExportsInfo) {
  debug('Printing results...');

  console.log('');
  console.log('List of exported members:');
  console.log('===================================');
  console.log(Object.keys(exports.exports).forEach((name) => console.log(`\t - ${name}`)));
  console.log('===================================');
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
