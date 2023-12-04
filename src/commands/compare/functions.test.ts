import { testCompare } from './utils';

describe('Compare functions', () => {
  test('NO CHANGES - not changing anything should not trigger anything', () => {
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

  test('REMOVE FUNCTION - removing a previously exported function should trigger a removal', () => {
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

  test('NEW FUNCTION - adding a new exported function should trigger an addition', () => {
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

  test("CHANGE RETURN VALUE - changing a function's return value type should trigger a breaking change", () => {
    const prev = `
      export function foo(): string {};
    `;
    const current = `
      export function foo(): boolean {};`;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['foo']);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test("CHANGE ARGUMENT - changing a function's argument should trigger a breaking change", () => {
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

    expect(Object.keys(comparison.changes)).toEqual(['foo', 'foo2', 'foo4']);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('REMOVE ARGUMENT - removing any argument of a function should trigger a breaking change', () => {
    const prev = `
      export function foo(a: string, b: string): string {};
    `;
    const current = `
      export function foo(a: string): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['foo']);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('NEW ARGUMENT - adding a new positional argument to a function should trigger a breaking change', () => {
    const prev = `
      export function foo(a: string, b: string): string {};
    `;
    const current = `
      export function foo(a: string, b: string, c: number): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['foo']);
    expect(Object.keys(comparison.additions).length).toBe(0);
    expect(Object.keys(comparison.removals).length).toBe(0);
  });

  test('NEW OPTIONAL ARGUMENT - adding a new optional positional argument to a function should not trigger a breaking change', () => {
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

  describe('Deeper function parameters', () => {
    test('Changing an unexported type of a parameter to a compatible version should not trigger a breaking change', () => {
      const prev = `
      type TestType = 'a' | 'b';
      export function foo(a: string, b: TestType): string {};
    `;

      // adding to union type is compatible
      const current = `
      type TestType = 'a' | 'b' | 'c'; // added 'c'
      export function foo(a: string, b: TestType): string {};
    `;
      const comparison = testCompare(prev, current);

      expect(Object.keys(comparison.changes).length).toBe(0);
      expect(Object.keys(comparison.additions).length).toBe(0);
      expect(Object.keys(comparison.removals).length).toBe(0);
    });

    test('Changing an unexported type of a parameter to an incompatible version should trigger a breaking change', () => {
      const prev = `
      type TestType = 'a' | 'b' | 'c';
      export function foo(a: string, b: TestType): string {};
    `;

      //removing from union type is not compatible
      const current = `
      type TestType = 'a' | 'b'; // removed 'c'
      export function foo(a: string, b: TestType): string {};
    `;
      const comparison = testCompare(prev, current);

      expect(Object.keys(comparison.changes).length).toBe(1);
      expect(Object.keys(comparison.additions).length).toBe(0);
      expect(Object.keys(comparison.removals).length).toBe(0);
    });

    test('Changing an unexported type of a parameter to a compatible version should not trigger a breaking change (chained union types)', () => {
      const prev = `
      type InnerType = 'a' | 'b';
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;

      //adding to inner union type is still compatible
      const current = `
      type InnerType = 'a' | 'b' | 'x'; // added 'x'
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;
      const comparison = testCompare(prev, current);

      expect(Object.keys(comparison.changes).length).toBe(0);
      expect(Object.keys(comparison.additions).length).toBe(0);
      expect(Object.keys(comparison.removals).length).toBe(0);
    });

    test('Changing an unexported type of a parameter to an incompatible version should trigger a breaking change (chained union types)', () => {
      const prev = `
      type InnerType = 'a' | 'b';
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;

      //removing from union type is not compatible
      const current = `
      type InnerType = 'a'; // removed 'b'
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;
      const comparison = testCompare(prev, current);

      expect(Object.keys(comparison.changes).length).toBe(1);
      expect(Object.keys(comparison.additions).length).toBe(0);
      expect(Object.keys(comparison.removals).length).toBe(0);
    });

    test('Changing a deep-nested type of a parameter to an incompatible version should trigger a breaking change', () => {
      const prev = `
      interface InnerType {
        a: string;
        b: string;
      }
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;

      //changing deep nested type is not compatible
      const current = `
      interface InnerType {
        a: string;
        b: number;
      }
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;
      const comparison = testCompare(prev, current);

      expect(Object.keys(comparison.changes).length).toBe(1);
      expect(Object.keys(comparison.additions).length).toBe(0);
      expect(Object.keys(comparison.removals).length).toBe(0);
    });

    test('Changing a deep-nested type of a parameter to an incompatible version should trigger a breaking change', () => {
      const prev = `
      type DeepInnerType = 'a' | 'b';
      interface InnerType {
        a: string;
        b: DeepInnerType;
      }
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;

      //changing deep nested type is not compatible
      const current = `
      type DeepInnerType = 'a'; // removed 'b'
      interface InnerType {
        a: string;
        b: DeepInnerType;
      }
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;
      const comparison = testCompare(prev, current);

      expect(Object.keys(comparison.changes).length).toBe(1);
      expect(Object.keys(comparison.additions).length).toBe(0);
      expect(Object.keys(comparison.removals).length).toBe(0);
    });

    test('Changing a deep-nested type of a parameter to a compatible version should not trigger a breaking change', () => {
      const prev = `
      type DeepInnerType = 'a' | 'b';
      interface InnerType {
        a: string;
        b: DeepInnerType;
      }
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;

      //adding to deep nested type is still compatible
      const current = `
      type DeepInnerType = 'a' | 'b' | 'x'; // added 'x'
      interface InnerType {
        a: string;
        b: DeepInnerType;
      }
      type TestType = InnerType | 'c';
      export function foo(a: string, b: TestType): string {};
    `;
      const comparison = testCompare(prev, current);

      expect(Object.keys(comparison.changes).length).toBe(0);
      expect(Object.keys(comparison.additions).length).toBe(0);
      expect(Object.keys(comparison.removals).length).toBe(0);
    });
  });
});
