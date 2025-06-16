import { testCompare } from './utils.js';

describe('Compare interfaces', () => {
  test('NO CHANGES - not changing anything should not trigger a change', () => {
    const prev = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
      }
    `;
    const current = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('REMOVING INTERFACE - removing a previously exported interface should trigger removal', () => {
    const prev = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
      }
    `;
    const current = ``;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(4); // 1 for the interface, 3 for the properties
  });

  test('NEW OPTIONAL VARIABLE - adding a new optional interface variable should trigger an addition', () => {
    const prev = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
      }
    `;
    const current = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
        four?: number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(1);
    expect(comparison).toHaveTypeRemovals(0);
  });

  // If there is a new variable introduced to the interface then any class already extending that interface can break
  test('NEW VARIABLE - adding a new not optional interface variable should trigger a breaking change and addition', () => {
    const prev = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
      }
    `;
    const current = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
        four: number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeAdditions(1); // adding "four"
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('REMOVING A VARIABLE - removing a interface variable should trigger a removal', () => {
    const prev = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
      }
    `;
    const current = `
      export interface Foo {
        one: string;
        two: string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(1);
  });

  test('MAKING VARIABLE OPTIONAL - making a variable optional should not breaking change', () => {
    const prev = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
      }
    `;
    const current = `
      export interface Foo {
        one: string;
        two: string;
        three?: string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('MAKING VARIABLE NOT OPTIONAL - making a previously optional variable to be not optional should trigger a breaking change', () => {
    const prev = `
      export interface Foo {
        one: string;
        two: string;
        three?: string;
      }
    `;
    const current = `
      export interface Foo {
        one: string;
        two: string;
        three: string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  // In case a class is already extending this interface then it can break
  test('NEW METHOD - adding a new method to the interface should trigger a breaking change and addition', () => {
    const prev = `
      export interface Foo {
        data: string;
        bar?: number;

        constructor(data: number);
        get length(): number;
      }
    `;
    const current = `
      export interface Foo {
        data: string;
        bar?: number;

        constructor(data: number);
        get length(): number;

        // NEW
        newClassMethod(foo: string): boolean;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeAdditions(1);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('REMOVING METHOD - removing a method should trigger a removal', () => {
    const prev = `
      export interface Foo {
        data: string;
        bar?: number;

        constructor(data: number);
        get length(): number;
      }
    `;
    const current = `
      export interface Foo {
        data: string;
        bar?: number;

        constructor(data: number);
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(1);
  });

  test('MAKING METHOD OPTIONAL - making a method optional should not trigger a breaking change', () => {
    const prev = `
      export interface Foo {
        data: string;
        bar?: number;

        constructor(data: number);
        getItems(): number;
      }
    `;
    const current = `
      export interface Foo {
        data: string;
        bar?: number;

        constructor(data: number);

        // CHANGED TO OPTIONAL
        getItems?(): number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('MAKING METHOD NOT OPTIONAL - making a previously optional method to be not optional should trigger a breaking change', () => {
    const prev = `
      export interface Foo {
        data: string;
        bar?: number;

        constructor(data: number);
        getItems?(): number;
      }
    `;
    const current = `
      export interface Foo {
        data: string;
        bar?: number;

        constructor(data: number);
        getItems(): number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });
});
