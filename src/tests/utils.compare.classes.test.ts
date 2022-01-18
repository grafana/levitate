import { testCompare } from "./test-utils";

describe("Compare classes", () => {
  test("adding a new optional class variable should not trigger a change", () => {
    const prev = `
      export declare class Foo<T = any> {
        private data;

        constructor(data: number);        
        get length(): number;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        private data;
        
        // NEW
        private bar?: number;

        constructor(data: number);
        get length(): number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("adding a new class method should not trigger a change", () => {
    const prev = `
      export declare class Foo<T = any> {
        private data;
        private bar?: number;

        constructor(data: number);
        get length(): number;
      }
    `;
    const current = `
      export declare class Foo<T = any> {
        private data;
        private bar?: number;

        constructor(data: number);
        get length(): number;

        // NEW
        newClassMethod(foo: string): boolean;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("not changing anything should not trigger a change", () => {
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

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("adding a new optional positional argument to any of the methods should not trigger a change", () => {
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

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("changing the return value of a method should trigger a change", () => {
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

    expect(Object.keys(comparison.changes).length).toBe(1);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("changing a parameter of a method should trigger a change", () => {
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
        methodA(colName: number): number;
        methodB(col: Boolean): string;
        
        // NO CHANGE
        methodC(col: string): string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(1);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("renaming a class method should trigger a change", () => {
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

    expect(Object.keys(comparison.changes).length).toBe(1);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("removing a class method should trigger a change", () => {
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

    expect(Object.keys(comparison.changes).length).toBe(1);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("changing the generic should trigger a change", () => {
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
        methodB(col: number): number;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(1);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });
});
