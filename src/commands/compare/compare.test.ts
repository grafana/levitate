import path from 'path';
import { generateTmpFileWithContent } from '../../tests/test-utils.js';
import { compareExports } from './compare.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

    const ignoredExports = {};

    const comparison = compareExports(old, newFile, ignoredExports);
    expect(comparison).toHaveTypeChanges(1);
  });

  test('Edge case with props suffix renaming', async () => {
    const fixturePath = path.resolve(__dirname, '../../../fixtures/compare/props-suffix/');
    const current = path.resolve(fixturePath, 'current.d.ts');
    const prev = path.resolve(fixturePath, 'previous.d.ts');
    const ignoredExports = {};
    const comparison = compareExports(prev, current, ignoredExports);

    // this is a false positive
    // there shouldn't be any change between the fixtures
    // keeping it here to document it
    expect(Object.keys(comparison.changes)).toEqual(['VizRepeater.componentDidUpdate']);

    // these are real detections
    expect(comparison).toHaveTypeAdditions(1);
    expect(comparison).toHaveTypeRemovals(2);
  });

  test('multiple files should not report false positives', async () => {
    const fixturePath = path.resolve(__dirname, '../../../fixtures/compare/multi-files/');
    const current = path.resolve(fixturePath, 'current', 'index.d.ts');
    const prev = path.resolve(fixturePath, 'previous', 'index.d.ts');
    const ignoredExports = {};
    const comparison = compareExports(prev, current, ignoredExports);
    expect(comparison).toHaveTypeChanges(0);
  });
});
