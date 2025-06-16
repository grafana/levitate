import { testCompare } from './utils.js';

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

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
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
    expect(comparison).toHaveTypeAdditions(1);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('ADDING OPTIONAL TYPE - adding a new optional type should not trigger an addition', () => {
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
        three?: boolean;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(1);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('REMOVING DECLARE - removing a declare should not trigger a removal', () => {
    const prev = `
      export declare type Bar = {
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

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });
});
