import { testCompare } from "./test-utils";

describe("Compare interfaces", () => {
  test("adding a new optional interface variable should not trigger a change", () => {
    const prev = `
      export interface DataSourceRef {
        type?: string;
        uid?: string;
        foo?: string;
      }
    `;
    const current = `
      export interface DataSourceRef {
        type?: string;
        uid?: string;
        foo?: string;
        bar?: string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("not changing anything should not trigger a change", () => {
    const prev = `
      export interface DataSourceRef {
        type?: string;
        uid?: string;
        foo?: string;
      }
    `;
    const current = `
      export interface DataSourceRef {
        type?: string;
        uid?: string;
        foo?: string;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });
});
