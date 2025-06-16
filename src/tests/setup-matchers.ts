import { expect } from 'vitest';
import type { Changes, Exports } from '../types.js';
import { getTypeAdditionsAsText, getTypeChangesAsText, getTypeRemovalsAsText } from './test-utils.js';

expect.extend({
  toHaveTypeChanges(received: Changes, expected = 0) {
    const changesCount = Object.keys(received.changes).length;
    const pass = changesCount === expected;
    const message = () => {
      if (expected > 0 && changesCount === 0) {
        return `Expected to have type changes, but haven't found any`;
      }

      return `Expected to have ${expected} changes, but found ${changesCount} \n\n${getTypeChangesAsText(received)}`;
    };

    return {
      message,
      pass,
    };
  },

  toHaveTypeRemovals(received: Exports, expected = 0) {
    const removalsCount = Object.keys(received).length;
    const pass = removalsCount === expected;
    const message = () => {
      if (expected > 0 && removalsCount === 0) {
        return `Expected to have type removals, but haven't found any`;
      }
      return `Expected to have ${expected} removals, but found ${removalsCount} \n\n${getTypeRemovalsAsText(received)}`;
    };

    return {
      message,
      pass,
    };
  },

  toHaveTypeAdditions(received: Exports, expected = 0) {
    const additionsCount = Object.keys(received).length;
    const pass = additionsCount === expected;
    const message = () => {
      if (expected > 0 && additionsCount === 0) {
        return `Expected to have type additions, but haven't found any`;
      }
      return `Expected to have ${expected} additions, but found ${additionsCount} \n\n${getTypeAdditionsAsText(received)}`;
    };

    return {
      message,
      pass,
    };
  },
});
