import { testCompare } from './utils.js';

describe('Compare functions', () => {
  it('NO CHANGES - not changing anything should not trigger anything', () => {
    const prev = `
      export function foo(a: string, b: string): string {};
      export function foo2({ a, b }: { a: string, b: string }): string {};
    `;
    const current = `
      export function foo(a: string, b: string): string {};
      export function foo2({ a, b }: { a: string, b: string }): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  it('REMOVE FUNCTION - removing a previously exported function should trigger a removal', () => {
    const prev = `
      export function foo(a: string, b: string): string {};
      export function foo2(a: string): boolean {};
    `;
    const current = `
      export function foo(a: string, b: string): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(1);
  });

  it('NEW FUNCTION - adding a new exported function should trigger an addition', () => {
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

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(1);
    expect(comparison).toHaveTypeRemovals(0);
  });

  it("CHANGE RETURN VALUE - changing a function's return value type should trigger a breaking change", () => {
    const prev = `
      export function foo(): string {};
    `;
    const current = `
      export function foo(): boolean {};`;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['foo']);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  it("CHANGE ARGUMENT - changing a function's argument should trigger a breaking change", () => {
    const prev = `
      export function foo(a: string, b: string): string {};
      export function foo2(a: number, b: number): boolean {};
      export function foo3(a: number): boolean {};
      export function foo4({ a, b }: { a: number, b: number }): number {};
    `;
    const current = `
      export function foo(a: string, b: number): string {}; // argument b changed from string to number
      export function foo2(a: boolean: b: number): boolean {}; // argument a changed from boolean to number
      export function foo3(a: number): boolean {}; // nothing changed 
      export function foo4({ a, b }: { a: string, b: number }): number {}; // argument a changed from number to string
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['foo', 'foo2', 'foo4']);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  it('REMOVE ARGUMENT - removing any argument of a function should trigger a breaking change', () => {
    const prev = `
      export function foo(a: string, b: string): string {};
    `;
    const current = `
      export function foo(a: string): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(Object.keys(comparison.changes)).toEqual(['foo']);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  it('NEW ARGUMENT - adding a new positional argument to a function should trigger a breaking change', () => {
    const prev = `
      export function foo(a: string, b: string): string {};
    `;
    const current = `
      export function foo(a: string, b: string, c: number): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(1);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  it('NEW OPTIONAL ARGUMENT - adding a new optional positional argument to a function should not trigger a breaking change', () => {
    const prev = `
      export function foo(a: string, b: string): string {};
    `;
    const current = `
      export function foo(a: string, b: string, c?: number): string {};
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  it("REMOVING DECLARE from a parameter's type should not trigger a removal", () => {
    const prev = `
      export declare type Bar = {
        one: string;
        two: number;
      }

      export function foo(bar: Bar) {
        bar.one;
      }
    `;
    const current = `
      export type Bar = {
        one: string;
        two: number;
      }

      export function foo(bar: Bar) {
        bar.one;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  it('Changing the name of a function parmeter should not trigger a breaking change', () => {
    const prev = `
      export function foo(bar: number) {
        bar;
      }
    `;
    const current = `
      export function foo(newNameForBar: number) {
        bar;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(0);
    expect(comparison).toHaveTypeRemovals(0);
  });

  it('Adding an optional parameter to a function should not trigger a breaking change', () => {
    const prev = `
      export declare type Bar = {
        one: string;
        two: number;
      }

      export function foo(bar: Bar) {
        bar.one;
      }
    `;
    const current = `
      export type Bar = {
        one: string;
        two: number;
        three?: boolean;
      }

      export function foo(bar: Bar) {
        bar.one;
      }
    `;
    const comparison = testCompare(prev, current);

    expect(comparison).toHaveTypeChanges(0);
    expect(comparison).toHaveTypeAdditions(1);
    expect(comparison).toHaveTypeRemovals(0);
  });

  describe('Arrow functions', () => {
    it('Detects changes when a parameter name is changed', () => {
      const prev = `
      type params = {
        x: number;
        y: string;
      }
      export const testFunction = ({x, y}: params) => {}
    `;
      const current = `
      type params = {
        x: number;
        z: string; // changed
      }
      export const testFunction = ({x, y}: params) => {}
    `;
      const comparison = testCompare(prev, current);

      expect(comparison).toHaveTypeChanges(1);
      expect(comparison).toHaveTypeAdditions(0);
      expect(comparison).toHaveTypeRemovals(0);
    });

    it('Detects changes when a non-optional parameter is added', () => {
      const prev = `
        type params = {
          x: number;
          y: string;
        }
        export const testFunction = ({x, y}: params) => {}
      `;
      const current = `
        type params = {
          x: number;
          y: string;
          z: string; // added
        }
        export const testFunction = ({x, y, z}: params) => {}
      `;
      const comparison = testCompare(prev, current);

      expect(comparison).toHaveTypeChanges(1);
      expect(comparison).toHaveTypeAdditions(0);
      expect(comparison).toHaveTypeRemovals(0);
    });

    it('Detect changes when a parameter is removed', () => {
      const prev = `
        type params = {
          x: number;
          y: string;
        }
        export const testFunction = ({x, y}: params) => {}
      `;
      const current = `
        type params = {
          x: number;
          //        y: string; // removed
        }
        export const testFunction = ({x}: params) => {}
      `;
      const comparison = testCompare(prev, current);

      expect(comparison).toHaveTypeChanges(1);
      expect(comparison).toHaveTypeAdditions(0);
      expect(comparison).toHaveTypeRemovals(0);
    });

    it('Detects changes when a parameter is made optional', () => {
      const prev = `
        type params = {
          x: number;
          y: string;
        }
        export const testFunction = ({x, y}: params) => {}
      `;
      const current = `
        type params = {
          x: number;
          y?: string;
        }
        export const testFunction = ({x, y}: params) => {}
      `;
      const comparison = testCompare(prev, current);

      expect(comparison).toHaveTypeChanges(1);
      expect(comparison).toHaveTypeAdditions(0);
      expect(comparison).toHaveTypeRemovals(0);
    });

    it('Detects changes when a parameter name is changed (inline)', () => {
      const prev = `
        export const testFunction = ({x, y}: {x: number; y: string}) => {}
      `;
      const current = `
        export const testFunction = ({x, z}: {x: number; z: string}) => {} // changed
      `;
      const comparison = testCompare(prev, current);

      expect(comparison).toHaveTypeChanges(1);
      expect(comparison).toHaveTypeAdditions(0);
      expect(comparison).toHaveTypeRemovals(0);
    });
  });

  describe('Function expressions', function () {
    it('Detects changes when a parameter name is changed', function () {
      const prev = `
        type params = {
          x: number;
          y: string;
        }
        export const testFunction = function({x, y}: params) {}
      `;
      const current = `
        type params = {
          x: number;
          z: string; // changed
        }
        export const testFunction = function({x, y}: params) {}
      `;
      const comparison = testCompare(prev, current);

      expect(Object.keys(comparison.changes).length).toBe(1);
      expect(Object.keys(comparison.additions).length).toBe(0);
      expect(Object.keys(comparison.removals).length).toBe(0);
    });

    it('Detects changes when a non-optional parameter is added', function () {
      const prev = `
        type params = {
          x: number;
          y: string;
        }
        export const testFunction = function({x, y}: params) {}
      `;
      const current = `
        type params = {
          x: number;
          y: string;
          z: string; // added
        }
        export const testFunction = function({x, y, z}: params) {}
      `;
      const comparison = testCompare(prev, current);

      expect(comparison).toHaveTypeChanges(1);
      expect(comparison).toHaveTypeAdditions(0);
      expect(comparison).toHaveTypeRemovals(0);
    });

    it('Detect changes when a parameter is removed', function () {
      const prev = `
        type params = {
          x: number;
          y: string;
        }
        export const testFunction = function({x, y}: params) {}
      `;
      const current = `
        type params = {
          x: number;
          //        y: string; // removed
        }
        export const testFunction = function({x}: params) {}
      `;
      const comparison = testCompare(prev, current);

      expect(comparison).toHaveTypeChanges(1);
      expect(comparison).toHaveTypeAdditions(0);
      expect(comparison).toHaveTypeRemovals(0);
    });

    it('Detects changes when a parameter is made optional', function () {
      const prev = `
        type params = {
          x: number;
          y: string;
        }
        export const testFunction = function({x, y}: params) {}
      `;
      const current = `
        type params = {
          x: number;
          y?: string;
        }
        export const testFunction = function({x, y}: params) {}
      `;
      const comparison = testCompare(prev, current);

      expect(comparison).toHaveTypeChanges(1);
      expect(comparison).toHaveTypeAdditions(0);
      expect(comparison).toHaveTypeRemovals(0);
    });

    it('Detects changes when a parameter name is changed', function () {
      const prev = `
        export const testFunction = function({x, y}: {x: number; y: string}) {}
      `;
      const current = `
        export const testFunction = function({x, z}: {x: number; z: string}) {} // changed
      `;
      const comparison = testCompare(prev, current);

      expect(comparison).toHaveTypeChanges(1);
      expect(comparison).toHaveTypeAdditions(0);
      expect(comparison).toHaveTypeRemovals(0);
    });
  });
});
