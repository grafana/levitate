import { compareExports } from '..';
import { generateTmpFileWithContent } from './test-utils';

describe('Utils compare tests', () => {
  it('should recognize changes in props for components', () => {
    const old = generateTmpFileWithContent(
      `
      type TestProps = {
        foo: string;
        bar: string[];
      };
      export function TestComponent({ foo, bar }: TestProps) {}
      `
    );
    const newFile = generateTmpFileWithContent(
      `
      type TestProps = {
        foo: string;
        bar: number[]; // notice the change here
      };
      export function TestComponent({ foo, bar }: TestProps) {}
      `
    );

    const comparison = compareExports(old, newFile);
    expect(Object.keys(comparison.changes).length).toBe(1);
  });
});
