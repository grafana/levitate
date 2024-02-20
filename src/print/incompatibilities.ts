import chalk from 'chalk';
import ts from 'typescript';
import { IncompatibilityInfo } from '../types.js';
import { getSymbolDiff } from '../utils/diff.js';
import { logInfo } from '../utils/log.js';
import { printHeading, printSpacing } from './utils.js';

export function printIncompatibilities(
  incompatibilities: IncompatibilityInfo[],
  {
    markdown = false,
  }: {
    markdown?: boolean;
  } = {}
) {
  const count = Object.keys(incompatibilities).length;
  printSpacing(1);
  printHeading(chalk.green(`INCOMPATIBILITIES (${count})\n`));

  if (!count) {
    logInfo(chalk.gray('  No incompatibilities found.'));
    return;
  }
  let counter = 1;

  const removals = incompatibilities.filter((i) => i.removal);
  const changes = incompatibilities.filter((i) => i.change);

  for (const item of removals) {
    logInfo(
      chalk.white(counter + ')'),
      chalk.red('Removed'),
      chalk.cyan.bold('`' + item.name + '`'),
      'used in',
      '`' +
        chalk.white(item.sourceFile.fileName) +
        ':' +
        chalk.gray(ts.getLineAndCharacterOfPosition(item.sourceFile, item.codeIdentifier.getStart()).line + 1) +
        '`'
    );
    counter++;
  }

  for (const item of changes) {
    const detail = getIncompatibilityDescription(item);
    if (detail !== '') {
      logInfo(
        chalk.white(counter + ')'),
        chalk.yellow('Changed'),
        chalk.cyan.bold('`' + item.name + '`'),
        'used in',
        '`' +
          chalk.white(item.sourceFile.fileName) +
          ':' +
          chalk.gray(ts.getLineAndCharacterOfPosition(item.sourceFile, item.codeIdentifier.getStart()).line + 1) +
          '`'
      );
      if (markdown) {
        logInfo('```diff');
      }
      logInfo(detail);
      if (markdown) {
        logInfo('```');
      }
      counter++;
    }
  }
}

export function getIncompatibilityType(incompatibility: IncompatibilityInfo): string {
  if (incompatibility.change) {
    return chalk.yellow('API Signature changed\n');
  }
  if (incompatibility.removal) {
    return chalk.red('API Removed\n');
  }
  return '';
}

function getIncompatibilityDescription(incompatibility: IncompatibilityInfo): string {
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

    return diff;
  }
  return '';
}
