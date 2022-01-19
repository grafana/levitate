import { testCompare } from "./test-utils";

describe("Compare enums", () => {
  test("adding a new value to an enum should not trigger a change", () => {
    const prev = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
      }
    `;
    const current = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
        New = 'new',
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("removing a value from an enum should trigger a change", () => {
    const prev = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
      }
    `;
    const current = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(["SampleEnum"]);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("renaming a value inside an enum should trigger a breaking change", () => {
    const prev = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
      }

      export declare enum AnotherEnum {
        one = 'one',
        two = 'two',
      }
    `;
    const current = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        RemoveRenamed = 'remove',
      }

      export declare enum AnotherEnum {
        one = 'one',
        two = '__CHANGED__',
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(["SampleEnum", "AnotherEnum"]);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("not changing anything should not trigger a change", () => {
    const prev = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
      }
    `;
    const current = `
      export declare enum SampleEnum {
        Append = 'append',
        Replace = 'replace',
        Remove = 'remove',
      }
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes).length).toBe(0);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });
});
