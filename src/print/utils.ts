import chalk from 'chalk';
import { logInfo } from '../utils/log.js';

// 🥃
export function printRedLabel(text: string) {
  logInfo(chalk.bgRed.bold.white(` ${text} `));
}

export function printHeading(text: string, description?: string) {
  logInfo(chalk.bold(`  ${text}`));

  if (description) {
    logInfo(chalk.gray(description));
  }
}

export function printSpacing(count?: number) {
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      logInfo('');
    }
  } else {
    logInfo('');
  }
}
