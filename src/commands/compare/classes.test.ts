import { testCompare } from './utils.js';

describe('Compare classes', () => {
  test('NO CHANGES - not changing anything should not trigger a change', () => {
    const prev = `
      export declare class Foo<T = any> {
        private data;
        private index;
        private obj;
        private foo?: string;

        constructor(data: number);

        get dataFrame(): number;
        get length(): number;
        getSomething(col: number): string | undefined;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        private data;
        private index;
        private obj;
        private foo?: string;

        constructor(data: number);

        get dataFrame(): number;
        get length(): number;
        getSomething(col: number): string | undefined;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeRemovals(0);
    expect(comparison).toHaveTypeAdditions(0);
  });

  test('REMOVING CLASS - removing a previously exported class should trigger a removal', () => {
    const prev = `
      export declare class Foo {
        private one;
        private two;
        private three: string;
      }
    `;
    const current = ``;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeRemovals(1);
    expect(comparison).toHaveTypeAdditions(0);
  });

  test('REMOVING A NOT EXPORTED CLASS - removing a previously not exported class should not trigger a removal', () => {
    const prev = `
      export declare class Foo {
        private one;
        private two;
        private three: string;
      }

      declare class Bar {
        private four: string;
      }
    `;
    const current = `
      export declare class Foo {
        private one;
        private two;
        private three: string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeRemovals(0);
    expect(comparison).toHaveTypeAdditions(0);
  });

  test('NEW VARIABLE - adding a new class variable should not trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        private one;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        private one;

        // NEW
        private bar: number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('NEW OPTIONAL VARIABLE - adding a new optional class variable should not trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        private one;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        private one;

        // NEW
        private bar?: number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeRemovals(0);
    expect(comparison).toHaveTypeAdditions(0);
  });

  test('MAKING A VARIABLE OPTIONAL - making a class variable optional should not trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        private one;
        private two: string;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        private one;
        private two?: string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeRemovals(0);
    expect(comparison).toHaveTypeAdditions(0);
  });

  // It is the same as adding a new variable
  test('MAKING A VARIABLE NOT OPTIONAL - making a previously optional class variable to be not optional should not trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        private one;
        private two?: string;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        private one;
        private two: string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeRemovals(0);
    expect(comparison).toHaveTypeAdditions(0);
  });

  test('CHANGING A PUBLIC MEMBER TO BE PRIVATE - making a previously public class member to be private should trigger a change and removal', () => {
    const prev = `
      export declare class Foo {
        one;
        two: string;
        public getItems(): string;
      }
    `;
    const current = `
      export declare class Foo {
        one;
        private two: string;
        private getItems(): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeRemovals(2); // 2 became private, thus, removed
    expect(comparison).toHaveTypeAdditions(0);
  });

  test('CHANGING A PUBLIC MEMBER TO BE PROTECTED - making a previously public class member to be protected should trigger a breaking change and removal', () => {
    const prev = `
      export declare class Foo {
        one;
        two: string;
        public getItems(): string;
      }
    `;
    const current = `
      export declare class Foo {
        one;
        protected two: string;
        protected getItems(): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeRemovals(2); // 2 became protected, thus, removed
    expect(comparison).toHaveTypeAdditions(0);
  });

  // Like this subclasses would not be able to access a previously accessible member.
  test('CHANGING A PROTECTED MEMBER TO BE PRIVATE - making a previously protected class member to be private should trigger a breaking change', () => {
    const prev = `
      export declare class Foo {
        one;
        protected two: string;
        protected getItems(): string;
      }
    `;
    const current = `
      export declare class Foo {
        one;
        private two: string;
        private getItems(): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeRemovals(0);
    expect(comparison).toHaveTypeAdditions(0);
  });

  test('CHANGING A PRIVATE MEMBER TO BE PROTECTED - making a previously private class member to be protected should not trigger a breaking change', () => {
    const prev = `
      export declare class Foo {
        one;
        private two: string;
        private getItems(): string;
      }
    `;
    const current = `
      export declare class Foo {
        one;
        protected two: string;
        protected getItems(): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeRemovals(0);
    expect(comparison).toHaveTypeAdditions(0);
  });

  test('CHANGING A PRIVATE MEMBER TO BE PUBLIC - making a previously private class member to be public should trigger additions', () => {
    const prev = `
      export declare class Foo {
        one;
        private two: string;
        private getItems(): string;
      }
    `;
    const current = `
      export declare class Foo {
        one;
        two: string;
        getItems(): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(2); // two no longer private, thus, added
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('CHANGING A PROTECTED MEMBER TO BE PUBLIC - making a previously protected class member to be public should trigger additions', () => {
    const prev = `
      export declare class Foo {
        one;
        protected two: string;
        protected getItems(): string;
      }
    `;
    const current = `
      export declare class Foo {
        one;
        two: string;
        getItems(): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(2); // two no longer protected, thus, added
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('NEW METHOD - adding a new class method should trigger additions', () => {
    const prev = `
      export declare class Foo {
        private one;
        private two?: number;

        constructor(data: number);
      }
    `;
    const current = `
      export declare class Foo {
        private one;
        private two?: number;

        constructor(data: number);

        // NEW
        newClassMethod(foo: string): boolean;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(1); // newClassMethod added
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('MAKING A METHOD OPTIONAL - making method optional should not trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        private one;

        getItems(): string;
      }
      `;
    const current = `
      export declare class Foo<T = any> {
        private one;

        getItems?(): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  // This is similar to adding a new method
  test('MAKING A METHOD NOT OPTIONAL - making a previously optional class method to be not optional should not trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        private one;

        getItems?(): string;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        private one;

        getItems(): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('NEW ARGUMENT FOR A CLASS METHOD - adding a new positional argument to any of the methods should trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        newClassMethod(foo: string): boolean;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        newClassMethod(foo: string, bar: boolean): boolean;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(2); // two changes. one for the class one for the method
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('NEW OPTIONAL ARGUMENT FOR A CLASS METHOD - adding a new optional positional argument to any of the methods should not trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        newClassMethod(foo: string): boolean;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        newClassMethod(foo: string, bar?: boolean): boolean;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('CHANGING RETURN VALUE OF A CLASS METHOD - changing the return value of a method should trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        getSomething(col: number): number;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        getSomething(col: number): boolean;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(2); // Foo and Foo.getSomething changed
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('CHANGING ARGUMENT OF A CLASS METHOD - changing any existing argument of a method should trigger a breaking change', () => {
    const prev = `
      export declare class Foo<T = any> {
        methodA(col: number): number;
        methodB(col: string): string;
        methodC(col: string): string;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        // CHANGED
        methodB(col: Boolean): string;

        // NO CHANGE
        methodA(colName: number): number; // the name of the argument changed but it's the same type
        methodC(col: string): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['Foo', 'Foo.methodB']);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  test('RENAMING METHOD - renaming a class method should trigger a change, addition and removal', () => {
    const prev = `
      export declare class Foo<T = any> {
        methodA(col: number): number;
        methodB(col: number): number;
      }
      `;
    const current = `
      export declare class Foo<T = any> {
        methodARenamed(col: number): number;
        methodB(col: number): number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1); // Foo changed
    expect(comparison).toHaveTypeAdditions(1); // methodARenamed added
    expect(comparison).toHaveTypeRemovals(1); // methodA removed
  });

  test('REMOVING METHOD - removing a class method should trigger a change and removal', () => {
    const prev = `
      export declare class Foo<T = any> {
        methodA(col: number): number;
        methodB(col: number): number;
      }
      `;
    const current = `
      export declare class Foo<T = any> {
        methodB(col: number): number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1); // Foo changed
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(1); // Foo.methodA removed
  });

  test('changing the generic should trigger a change in the generic type', () => {
    const prev = `
      export declare class Foo<T = any> {
        methodA(col: number): number;
        methodB(col: number): number;
      }
      `;
    const current = `
      type Bar = {
        a: string;
      };

      export declare class Foo<T = Bar> {
        methodA(col: number): number;
        methodB(col: number): number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['Foo.T']);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });
});
