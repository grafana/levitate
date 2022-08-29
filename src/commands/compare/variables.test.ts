import { testCompare } from './utils';

describe('Compare variables', () => {
  test('NO CHANGES - no changes should not trigger anything', () => {
    const prev = `export const foo: string;`;
    const current = `export const foo: string;`;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('CHANGE VARIABLE VALUE - changing the value of a variable should trigger a breaking change', () => {
    const prev = `export const foo = "bar";`;
    const current = `export const foo = "zed";`;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['foo']);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('CHANGE VARIABLE TYPE - changing the type of a variable should trigger a breaking change', () => {
    const prev = `export const foo: string;`;
    const current = `export const foo: number;`;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['foo']);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('RENAMING VARIABLE - renaming a variable should trigger a removal', () => {
    const prev = `
        export const foo: string;
      `;
    const current = ``;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(1);
  });

  test('NEW VARIABLE - adding a new variable should trigger an addition', () => {
    const prev = `
        export const foo: string;
      `;
    const current = `
        export const foo: string;
        export const bar: number;
      `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(1);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });
});
