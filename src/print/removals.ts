import chalk from 'chalk';
import Table from 'cli-table3';
import { Exports } from '../types.js';
import { logInfo } from '../utils/log.js';
import { printHeading, printSpacing } from './utils.js';

export function printRemovals(removals: Exports) {
  const count = Object.keys(removals).length;

  printSpacing(2);
  printHeading(chalk.red(`REMOVALS (${count})`));

  if (!count) {
    logInfo(chalk.gray('  No removals.'));
    return;
  }

  const table = new Table({
    head: ['Property', 'Previous location', 'Declaration'],
    colWidths: [30, 40, 90],
    wordWrap: true,
    wrapOnWordBoundary: false,
    style: { head: [], border: [] },
  });

  Object.keys(removals).forEach((name) => {
    table.push([
      chalk.red.bold(name),
      chalk.white(removals[name].declarations[0].getSourceFile().fileName),
      chalk.gray(removals[name].declarations[0].getText()),
    ]);
  });

  logInfo(table.toString());
}
