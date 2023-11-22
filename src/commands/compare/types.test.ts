import { testCompare } from './utils';

describe('Compare types', () => {
  test('NO CHANGES - not changing anything should not trigger anything', () => {
    const prev = `
      export type Bar = {
        one: string;
        two: number;
      }
    `;
    const current = `
      export type Bar = {
        one: string;
        two: number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('CHANGE TYPE - changing a type should trigger a breaking change', () => {
    const prev = `
      export declare type Foo = (value: number) => string;

      export type Bar = {
        one: string;
        two: number;
      }

      export type Baz = {
        three: number;
        four: boolean;
      }
    `;
    const current = `
      export declare type Foo = (value: string) => string;

      export type Bar = {
        one: string;
        two: number;
        three: boolean;
      }

      export type Baz = {
        three: number;
        four: boolean;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['Foo', 'Bar']);
    expect(Object.keys(comparison.additions).length).toBe(1);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('Removing "Export" from a symbol should trigger a breaking change', () => {
    const prev = `
      export type Bar = {
        one: string;
        two: number;
      }
    `;
    const current = `
      type Bar = {
        one: string;
        two: number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.removals)).toEqual(['Bar', 'Bar.one', 'Bar.two']);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(3);
  });

  test('Removing "declare" from a symbol should not trigger a breaking change', () => {
    const prev = `
      declare type Bar = {
        one: string;
        two: number;
      }
    `;
    const current = `
      type Bar = {
        one: string;
        two: number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.removals).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('Adding "declare" from a symbol should not trigger a breaking change', () => {
    const prev = `
      type Bar = {
        one: string;
        two: number;
      }
    `;
    const current = `
      declare type Bar = {
        one: string;
        two: number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.removals).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('', () => {
    const prev = `
      type Bar = {
        one: string;
        two: number;
      }
    `;
    const current = `
      declare type Bar = {
        one: string;
        two: number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.removals).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });
});
