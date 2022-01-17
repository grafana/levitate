import { testCompare } from "./test-utils";

describe("Compare functions", () => {
  test("changing a function's return value type should trigger a change", () => {
    const prev = `
      export function foo(): string {};
    `;
    const current = `
      export function foo(): boolean {};`;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(["foo"]);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("changing a function's parameter should trigger a change", () => {
    const prev = `
      export function foo(a: string, b: string): string {};
      export function foo2(a: number, b: number): boolean {};
      export function foo3(a: number): boolean {};
      export function foo4({ a, b }: { a: number, b: number }): number {};
    `;
    const current = `
      export function foo(a: string, b: number): string {};
      export function foo2(a: boolean: b: number): boolean {};
      export function foo3(a: number): boolean {};
      export function foo4({ a, b }: { a: string, b: number }): number {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(["foo", "foo2", "foo4"]);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("removing a function parameter should trigger a change", () => {
    const prev = `
      export function foo(a: string, b: string): string {};
    `;
    const current = `
      export function foo(a: string): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(["foo"]);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("removing a function should trigger a removal", () => {
    const prev = `
      export function foo(a: string, b: string): string {};
      export function foo2(a: string): boolean {};
    `;
    const current = `
      export function foo(a: string, b: string): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(1);
  });

  test("adding a new function should trigger an addition", () => {
    const prev = `
      export function foo(a: string, b: string): string {};
      export function foo2(a: string): boolean {};
    `;
    const current = `
      export function foo(a: string, b: string): string {};
      export function foo2(a: string): boolean {};
      export function foo3(): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(1);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("adding a new required positional parameter should trigger a change", () => {
    const prev = `
      export function foo(a: string, b: string): string {};
    `;
    const current = `
      export function foo(a: string, b: string, c: number): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(["foo"]);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("adding a new optional positional parameter should not trigger a change", () => {
    const prev = `
      export function foo(a: string, b: string): string {};
    `;
    const current = `
      export function foo(a: string, b: string, c?: number): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("not changing anything should not trigger anything", () => {
    const prev = `
      export function foo(a: string, b: string): string {};
      export function foo2({ a, b }: { a: string, b: string }): string {};
    `;
    const current = `
      export function foo(a: string, b: string): string {};
      export function foo2({ a, b }: { a: string, b: string }): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });
});
