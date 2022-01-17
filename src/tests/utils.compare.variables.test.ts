import { testCompare } from "./test-utils";

describe("Compare variables", () => {
  test("changing a variable's value should trigger a change å", () => {
    const prev = `export const foo = "bar";`;
    const current = `export const foo = "zed";`;
    const comparison = testCompare(prev, current);

    // Only "changes" should be found
    expect(Object.keys(comparison.changes)).toEqual(["foo"]);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("changing a variable's type should trigger a change", () => {
    const prev = `export const foo: string;`;
    const current = `export const foo: number;`;
    const comparison = testCompare(prev, current);

    // Only "changes" should be found
    expect(Object.keys(comparison.changes)).toEqual(["foo"]);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("no changes should not indicate a change at all", () => {
    const prev = `export const foo: string;`;
    const current = `export const foo: string;`;
    const comparison = testCompare(prev, current);

    // Should not find anything
    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("renaming a variable should trigger a removal", () => {
    const prev = `
        export const foo: string;
      `;
    const current = ``;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(1);
  });

  test("adding a new variable should trigger an addition", () => {
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
