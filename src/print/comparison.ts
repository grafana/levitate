import chalk from 'chalk';
import { Comparison, Exports } from '../types.js';
import { logDebug, logInfo } from '../utils/log.js';
import { printChanges } from './changes.js';
import { printRemovals } from './removals.js';
import { printHeading, printSpacing } from './utils.js';
import { printVerdict } from './veredict.js';
import Table from 'tty-table';
import { areChangesBreaking } from '../commands/compare/compare.js';

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
