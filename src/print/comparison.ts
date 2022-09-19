import chalk from 'chalk';
import { Comparison, Exports } from '../types';
import { logDebug, logInfo } from '../utils/log';
import { printChanges } from './changes';
import { printRemovals } from './removals';
import { printHeading, printSpacing } from './utils';
import { printVerdict } from './veredict';
import Table from 'tty-table';
import { areChangesBreaking } from '../commands/compare/compare';

export function printComparison({ changes, additions, removals, prevProgram, currentProgram }: Comparison) {
  logDebug('Printing results...');
  const isBreaking = areChangesBreaking({ changes, additions, removals, prevProgram, currentProgram });

  printAdditions(additions);
  printRemovals(removals);
  printChanges(changes, prevProgram, currentProgram);
  printVerdict(isBreaking);
}

function printAdditions(additions: Exports) {
  const count = Object.keys(additions).length;

  printSpacing(2);
  printHeading(chalk.green(`ADDITIONS (${count})`));

  if (!count) {
    logInfo(chalk.gray('  No additions.'));
    return;
  }

  const table = Table(
    [
      { value: 'Property', width: 30, align: 'left', headerAlign: 'left' },
      { value: 'Location', width: 40, align: 'left', headerAlign: 'left' },
      { value: 'Declaration', width: 90, align: 'left', headerAlign: 'left' },
    ],
    // @ts-ignore
    [
      ...Object.keys(additions).map((name) => [
        chalk.green.bold(name),
        chalk.white(additions[name].declarations[0].getSourceFile().fileName),
        chalk.gray(additions[name].declarations[0].getText()),
      ]),
    ]
  );

  logInfo(table.render());
}
