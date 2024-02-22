import chalk from 'chalk';
import { logInfo } from '../utils/log.js';
import { printSpacing } from './utils.js';

export function printVerdict(isBreaking: boolean) {
  if (isBreaking) {
    printSpacing(2);
    logInfo(chalk.bold.red('  ✘ There were possible breaking changes, please check the differences.\n\n'));

    return;
  }

  printSpacing(2);
  logInfo(chalk.bold.green('  ✔ No breaking changes introduced.\n\n'));
}
