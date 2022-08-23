import * as diff from 'diff';
import chalk from 'chalk';
import { ChangeType, getFunctionParametersDiff, isFunction, SymbolMeta } from '.';

function getDiffLegend() {
  return '\n' + chalk.green('+ Added') + ' ' + chalk.red('- Removed') + '\n' + '\n';
}

export function getDiff(prev: string, current: string) {
  const patch = diff.createPatch('string', prev, current);
  const lines = patch
    .split('\n')
    .slice(4)
    .map(getDiffForLine)
    .filter((line) => line !== null);

  if (lines.length === 0 || !lines[0]) {
    return '';
  }

  return getDiffLegend() + lines.join('\n') + '\n';
}

export function getSymbolDiff({ prev, current }: { prev: SymbolMeta; current: SymbolMeta }) {
  const prevDeclaration = prev.symbol.declarations[0].getText();
  const currentDeclaration = current.symbol.declarations[0].getText();

  if (isFunction(prev.symbol) && isFunction(current.symbol)) {
    const functionDiffText = getDiff(prevDeclaration, currentDeclaration);
    let paramsDiffText = '';
    const parametersDiff = getFunctionParametersDiff({ prev, current });
    if (parametersDiff && parametersDiff.type === ChangeType.PARAMETER_TYPE) {
      paramsDiffText += chalk.yellow('parameter type changed\n');
      try {
        paramsDiffText += getDiff(
          parametersDiff.prev.declarations[0].getText(),
          parametersDiff.current.declarations[0].getText()
        );
      } catch (e) {
        paramsDiffText = 'parameters -+-+-+-';
      }
    }
    return functionDiffText + paramsDiffText;
  }
  return getDiff(prevDeclaration, currentDeclaration);
}

function getDiffForLine(line) {
  switch (line[0]) {
    // Added lines
    case '+':
      return chalk.green(line);
    // Removed lines
    case '-':
      return chalk.red(line);
    case ' ':
      return line;
    case '@':
      return null;
    case '\\':
      return null;
  }
}
