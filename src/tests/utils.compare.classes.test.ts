import { testCompare } from "./test-utils";

describe("Compare classes", () => {
  test("adding a new optional class variable should not trigger a change", () => {
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
        private bar?: number;

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
});
