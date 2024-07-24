import { testCompare } from './utils.js';

describe('Compare enums', () => {
  test('NO CHANGES - not changing anything should not trigger a breaking change', () => {
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
        Remove = 'remove',
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('REMOVING ENUM - removing a previously exported enum should trigger a removal', () => {
    const prev = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
      }
    `;
    const current = ``;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(4);
  });

  test('NEW VALUE - adding a new value to an enum should trigger an addition', () => {
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
        Remove = 'remove',
        New = 'new',
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(1);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('REMOVING VALUE - removing an existing value from an enum should trigger a change and a removal', () => {
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
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['SampleEnum']);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(1);
  });

  test('RENAMING VALUE - renaming an existing value in an enum should trigger a change, an addition and a removal', () => {
    const prev = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
      }

      export declare enum AnotherEnum {
        one = 'one',
        two = 'two',
      }
    `;
    const current = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        RemoveRenamed = 'remove',
      }

      export declare enum AnotherEnum {
        one = 'one',
        two = '__CHANGED__',
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['SampleEnum', 'AnotherEnum', 'AnotherEnum.two']);
    expect(Object.keys(comparison.additions).length).toBe(1);
    expect(Object.keys(comparison.removals).length).toBe(1);
  });
});
