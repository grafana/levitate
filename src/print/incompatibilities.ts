import chalk from 'chalk';
import Table from 'tty-table';
import ts from 'typescript';
import { IncompatibilityInfo } from '../types';
import { getSymbolDiff } from '../utils/diff';
import { logInfo } from '../utils/log';
import { printHeading, printSpacing } from './utils';

export function printIncompatibilities(incompatibilities: IncompatibilityInfo[]) {
  const count = Object.keys(incompatibilities).length;

  printSpacing(1);
  printHeading(chalk.green(`INCOMPATIBILITIES (${count})`));

  if (!count) {
    logInfo(chalk.gray('  No incompatibilities found.'));
    return;
  }

  const table = Table(
    [
      { value: 'Name', width: 30, align: 'left', headerAlign: 'left' },
      { value: 'Location', width: 40, align: 'left', headerAlign: 'left' },
      { value: 'Detail', align: 'left', headerAlign: 'left' },
    ],
    //@ts-expect-error
    incompatibilities.map((item) => {
      return [
        chalk.green.bold(item.name),
        chalk.white(item.sourceFile.fileName) +
          ':' +
          chalk.gray(ts.getLineAndCharacterOfPosition(item.sourceFile, item.codeIdentifier.getStart()).line + 1),
        getIncompatibilityDetail(item),
      ];
    })
  );

  logInfo(table.render());
}

function getIncompatibilityDetail(incompatibility: IncompatibilityInfo) {
  if (incompatibility.change) {
    const diff = getSymbolDiff({
      prev: {
        key: incompatibility.change.prev.getName(),
        symbol: incompatibility.change.prev,
        program: incompatibility.change.prevProgram,
      },
      current: {
        key: incompatibility.change.current.getName(),
        symbol: incompatibility.change.current,
        program: incompatibility.change.currentProgram,
      },
    });

    return chalk.yellow('API Signature changed\n') + diff;
  }

  if (incompatibility.removal) {
    return chalk.red('API Removed\n');
  }
}
