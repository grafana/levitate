import { areChangesBreaking } from '../commands/compare/compare.js';
import { Comparison } from '../types.js';
import { getSymbolDiff } from '../utils/diff.js';

export function printJsonComparison({ changes, additions, removals, prevProgram, currentProgram }: Comparison) {
  const isBreaking = areChangesBreaking({ changes, additions, removals, prevProgram, currentProgram });
  const json = {
    additions: getJsonAdditions(additions),
    removals: printJsonRemovals(removals),
    changes: printJsonChanges(changes),
    hasBreakingChanges: !!isBreaking,
  };
  console.log(JSON.stringify(json, null, 2));
}

function getJsonAdditions(additions: Comparison['additions']) {
  return Object.keys(additions).map((name) => ({
    name,
    location: additions[name].declarations[0].getSourceFile().fileName,
    declaration: additions[name].declarations[0].getText(),
  }));
}

function printJsonRemovals(removals: Comparison['removals']) {
  return Object.keys(removals).map((name) => ({
    name,
    location: removals[name].declarations[0].getSourceFile().fileName,
    declaration: removals[name].declarations[0].getText(),
  }));
}

function printJsonChanges(changes: Comparison['changes']) {
  return Object.keys(changes).map((name) => ({
    name,
    location: changes[name].current.declarations[0].getSourceFile().fileName,
    diff: getSymbolDiff({
      prev: {
        key: name,
        symbol: changes[name].prev,
        program: changes[name].prevProgram,
      },
      current: {
        key: name,
        symbol: changes[name].current,
        program: changes[name].currentProgram,
      },
      options: { useAnsi: false, showLegend: false },
    }),
  }));
}
