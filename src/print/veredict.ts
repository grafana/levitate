import chalk from 'chalk';
import { printSpacing } from './utils';

export function printVerdict(isBreaking: boolean) {
  if (isBreaking) {
    printSpacing(2);
    console.log(chalk.bold.red('  ✘ There were possible breaking changes, please check the differences.\n\n'));

    return;
  }

  printSpacing(2);
  console.log(chalk.bold.green('  ✔ No breaking changes introduced.\n\n'));
}
