import chalk from 'chalk';
import Table from 'cli-table3';
import ts from '@tsd/typescript';
import { Changes } from '../types.js';
import { getSymbolDiff } from '../utils/diff.js';
import { logInfo } from '../utils/log.js';
import { printHeading, printSpacing } from './utils.js';

export function printChanges(changes: Changes, prevProgram: ts.Program, currentProgram: ts.Program) {
  const count = Object.keys(changes).length;

  printSpacing(2);
  printHeading(chalk.yellow(`CHANGES (${count})`));

  if (!count) {
    logInfo(chalk.gray('  No changes.'));
    return;
  }

  const table = new Table({
    head: ['Property', 'Location', 'Diff'],
    colWidths: [30, 40, 90],
    wordWrap: true,
    wrapOnWordBoundary: false,
    style: { head: [], border: [] },
  });

  Object.keys(changes).forEach((name) => {
    const diff = getSymbolDiff({
      prev: {
        key: name,
        symbol: changes[name].prev,
        program: prevProgram,
      },
      current: {
        key: name,
        symbol: changes[name].current,
        program: currentProgram,
      },
    });

    table.push([
      chalk.yellow.bold(name),
      chalk.white(changes[name].current.declarations[0].getSourceFile().fileName),
      diff,
    ]);
  });

  logInfo(table.toString());
}
