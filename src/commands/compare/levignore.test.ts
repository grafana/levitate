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
    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeAdditions(0);

    // SampleEnum.Remove was removed but ignored
    expect(comparison).toHaveTypeRemovals(0);
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
    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeAdditions(0);

    // SampleEnum.Remove was removed but ignored
    expect(comparison).toHaveTypeRemovals(0);
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

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);

    // SampleEnum.Remove was removed but ignored
    expect(comparison).toHaveTypeRemovals(0);
  });
});
