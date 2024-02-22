import chalk from 'chalk';
import Table from 'tty-table';
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

  const table = Table(
    [
      { value: 'Property', width: 30, align: 'left', headerAlign: 'left' },
      { value: 'Location', width: 40, align: 'left', headerAlign: 'left' },
      { value: 'Diff', width: 90, align: 'left', headerAlign: 'left' },
    ],
    // @ts-ignore
    [
      ...Object.keys(changes).map((name) => {
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

        return [
          chalk.yellow.bold(name),
          chalk.white(changes[name].current.declarations[0].getSourceFile().fileName),
          diff,
        ];
      }),
    ]
  );

  logInfo(table.render());
}
