import { generateTmpFileWithContent, testCompare } from '../tests/test-utils';
import { getIncompatibilitiesFromComparison } from '../comparison/source';
import { createProgram } from '../utils/typescript';

const prevAPIWithoutChange = `
      export declare type Foo = (value: number) => string;

      export type Bar = {
        one: string;
        two: number;
      }

      export type Baz = {
        three: number;
        four: boolean;
      }

      export declare type Qux = (value: number) => string;
    `;
const targetAPIWithChange = `
      export declare type Foo = (value: string) => string;

      export type Bar = {
        one: string;
        two: number;
        three: boolean;
      }

      export type Baz = {
        three: number;
        four: boolean;
      }
    `;
describe('is compatible command', () => {
  it('compareSourceFileWithChanges returns found problems', () => {
    const comparison = testCompare(prevAPIWithoutChange, targetAPIWithChange);
    const file = generateTmpFileWithContent(`
        const x = Foo(1234);
        const y = Qux(1234);
        const z: Bar = {
          one: '1234',
          two: 1234,
        }
    `);
    const program = createProgram(file);
    const sourceFile = program.getSourceFile(file);
    const result = getIncompatibilitiesFromComparison(sourceFile, comparison);
    expect(result).toHaveLength(3);
    //Foo had changed
    expect(result[0]).toMatchObject({ name: 'Foo', sourceFile });
    expect(result[0].change).not.toBeUndefined();
    expect(result[0].removal).toBeUndefined();

    // Bar changed
    expect(result[1]).toMatchObject({ name: 'Bar', sourceFile });
    expect(result[1].change).not.toBeUndefined();
    expect(result[1].removal).toBeUndefined();

    // Qux was removed
    expect(result[2]).toMatchObject({ name: 'Qux', sourceFile });
    expect(result[2].change).toBeUndefined();
    expect(result[2].removal).not.toBeUndefined();
  });
});
