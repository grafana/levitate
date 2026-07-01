import chalk from 'chalk';
import Table from 'cli-table3';
import { Comparison, Exports } from '../types.js';
import { logDebug, logInfo } from '../utils/log.js';
import { printChanges } from './changes.js';
import { printRemovals } from './removals.js';
import { printHeading, printSpacing } from './utils.js';
import { printVerdict } from './veredict.js';
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

  const table = new Table({
    head: ['Property', 'Location', 'Declaration'],
    colWidths: [30, 40, 90],
    wordWrap: true,
    wrapOnWordBoundary: false,
    style: { head: [], border: [] },
  });

  Object.keys(additions).forEach((name) => {
    table.push([
      chalk.green.bold(name),
      chalk.white(additions[name].declarations[0].getSourceFile().fileName),
      chalk.gray(additions[name].declarations[0].getText()),
    ]);
  });

  logInfo(table.toString());
}
