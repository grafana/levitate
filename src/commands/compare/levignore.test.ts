import { testCompare } from './utils.js';

describe('Levignore', () => {
  test.each([
    // directly matching
    ['Direct property', [/SampleEnum\.Remove/]],
    // wild card
    ['Wildcard', [/SampleEnum\..*\b/]],
  ])('Removing a property from a ignored enum should not trigger a warningo (%s)', (_, ignoredExport) => {
    const prev = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
      }
    `;
    const current = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        //Remove = 'remove',
      }
    `;
    const ignoredExports = {
      removals: ignoredExport,
    };

    const comparison = testCompare(prev, current, ignoredExports);

    // SampleEnum itself changed
    expect(Object.keys(comparison.changes).length).toBe(1);
    expect(Object.keys(comparison.additions).length).toBe(0);

    // SampleEnum.Remove was removed but ignored
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test.each([
    // directly matching
    ['Direct property', [/SampleEnum\.Replace/]],
    // wild card
    ['Wildcard', [/SampleEnum\..*\b/]],
  ])('Changing a property from a ignored enum should not trigger a warning (%s)', (_, ignoredExport) => {
    const prev = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
      }
    `;
    const current = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replaced-with-other-value',
        Remove = 'remove',
      }
    `;
    const ignoredExports = {
      changes: ignoredExport,
    };

    const comparison = testCompare(prev, current, ignoredExports);

    // SampleEnum itself changed that's 1 change. SampleEnum.Replace was changed
    // that's 2 changes but, ignored therefore: 1 change
    expect(Object.keys(comparison.changes).length).toBe(1);
    expect(Object.keys(comparison.additions).length).toBe(0);

    // SampleEnum.Remove was removed but ignored
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test.each([
    // directly matching
    ['Direct property', [/SampleEnum\.Append/]],
    // wild card
    ['Wildcard', [/SampleEnum\..*\b/]],
  ])('Adding a property from a ignored enum should not trigger a warning (%s)', (_, ignoredExport) => {
    const prev = `
      export declare enum SampleEnum {
        Replace = 'replace',
        Remove = 'remove',
      }
    `;
    const current = `
      export declare enum SampleEnum {
        Append = 'append-we-are-adding-this',
        Replace = 'replace',
        Remove = 'remove',
      }
    `;
    const ignoredExports = {
      additions: ignoredExport,
    };

    const comparison = testCompare(prev, current, ignoredExports);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);

    // SampleEnum.Remove was removed but ignored
    expect(Object.keys(comparison.removals).length).toBe(0);
  });
});
