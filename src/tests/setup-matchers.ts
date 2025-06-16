import { expect } from 'vitest';
import type { Comparison } from '../types.js';
import { getTypeAdditionsAsText, getTypeChangesAsText, getTypeRemovalsAsText } from './test-utils.js';

expect.extend({
  toHaveTypeChanges(comparison: Comparison, expected: number) {
    const changes = comparison.changes;
    const changesCount = Object.keys(changes).length;
    const pass = changesCount === expected;
    const message = () => {
      if (expected > 0 && changesCount === 0) {
        return `Expected to have type changes, but haven't found any`;
      }

      return `Expected to have ${expected} type changes, but found ${changesCount} \n\n${getTypeChangesAsText(changes)}`;
    };

    return {
      message,
      pass,
    };
  },

  toHaveTypeRemovals(comparison: Comparison, expected: number) {
    const removals = comparison.removals;
    const removalsCount = Object.keys(removals).length;
    const pass = removalsCount === expected;
    const message = () => {
      if (expected > 0 && removalsCount === 0) {
        return `Expected to have type removals, but haven't found any`;
      }
      return `Expected to have ${expected} type removals, but found ${removalsCount} \n\n${getTypeRemovalsAsText(removals)}`;
    };

    return {
      message,
      pass,
    };
  },

  toHaveTypeAdditions(comparison: Comparison, expected: number) {
    const additions = comparison.additions;
    const additionsCount = Object.keys(additions).length;
    const pass = additionsCount === expected;
    const message = () => {
      if (expected > 0 && additionsCount === 0) {
        return `Expected to have type additions, but haven't found any`;
      }
      return `Expected to have ${expected} type additions, but found ${additionsCount} \n\n${getTypeAdditionsAsText(additions)}`;
    };

    return {
      message,
      pass,
    };
  },
});
