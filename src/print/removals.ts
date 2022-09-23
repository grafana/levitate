import chalk from 'chalk';
import Table from 'tty-table';
import { Exports } from '../types';
import { printHeading, printSpacing } from './utils';

export function printRemovals(removals: Exports) {
  const count = Object.keys(removals).length;

  printSpacing(2);
  printHeading(chalk.red(`REMOVALS (${count})`));

  if (!count) {
    console.log(chalk.gray('  No removals.'));
    return;
  }

  const table = Table(
    [
      { value: 'Property', width: 30, align: 'left', headerAlign: 'left' },
      { value: 'Previous location', width: 40, align: 'left', headerAlign: 'left' },
      { value: 'Declaration', width: 90, align: 'left', headerAlign: 'left' },
    ],
    // @ts-ignore
    [
      ...Object.keys(removals).map((name) => [
        chalk.red.bold(name),
        chalk.white(removals[name].declarations[0].getSourceFile().fileName),
        chalk.gray(removals[name].declarations[0].getText()),
      ]),
    ]
  );

  console.log(table.render());
}
