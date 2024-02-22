import chalk from 'chalk';
import * as diff from 'diff';
import { getFunctionParametersDiff, isFunction, isMethod } from '../commands/compare/compare.js';
import { ChangeType, SymbolMeta } from '../types.js';

type DiffOptions = {
  useAnsi?: boolean;
  showLegend?: boolean;
};

const defaultOptions: DiffOptions = {
  useAnsi: true,
  showLegend: true,
};

function getDiffLegend(options: DiffOptions = defaultOptions) {
  const added = options.useAnsi ? chalk.green('+ Added') : '+ Added' + '\n';
  const removed = options.useAnsi ? chalk.red('- Removed') : '- Removed' + '\n';
  return `\n${added}${removed}\n\n`;
}

export function getDiff(prev: string, current: string, options: DiffOptions = defaultOptions) {
  const patch = diff.createPatch('string', prev, current);

  const lines = patch
    .split('\n')
    .slice(4)
    .map((line) => {
      switch (line[0]) {
        // Added lines
        case '+':
          return options.useAnsi ? chalk.green(line) : line;
        // Removed lines
        case '-':
          return options.useAnsi ? chalk.red(line) : line;
        case ' ':
          return line;
        case '@':
          return null;
        case '\\':
          return null;
      }
    })
    .filter((line) => line !== null);

  if (lines.length === 0 || !lines[0]) {
    return '';
  }

  if (!options.showLegend) {
    return lines.join('\n');
  }
  return getDiffLegend(options) + lines.join('\n') + '\n';
}

export function getSymbolDiff({
  prev,
  current,
  options = defaultOptions,
}: {
  prev: SymbolMeta;
  current: SymbolMeta;
  options?: DiffOptions;
}) {
  const prevDeclaration = prev.symbol.declarations[0].getText();
  const currentDeclaration = current.symbol.declarations[0].getText();

  if ((isFunction(prev.symbol) && isFunction(current.symbol)) || (isMethod(prev.symbol) && isMethod(current.symbol))) {
    const functionDiffText = getDiff(prevDeclaration, currentDeclaration, options);
    let paramsDiffText = '';
    const parametersDiff = getFunctionParametersDiff({ prev, current });
    if (parametersDiff && parametersDiff.type === ChangeType.PARAMETER_TYPE) {
      paramsDiffText += chalk.yellow('Parameter type changed:\n');
      try {
        paramsDiffText += getDiff(
          parametersDiff.prev.declarations[0].getText(),
          parametersDiff.current.declarations[0].getText(),
          options
        );
      } catch (e) {
        paramsDiffText = 'parameters -+-+-+-';
      }
    }
    return functionDiffText + paramsDiffText;
  }
  return getDiff(prevDeclaration, currentDeclaration, options);
}
