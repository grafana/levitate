import { getIncompatibilitiesFromComparison } from '../../comparison/source.js';
import { getExportInfo } from '../../compiler/exports.js';
import { generateTmpFileWithContent } from '../../tests/test-utils.js';
import { getPackageUsage } from '../../usage/usage.js';
import { createTsProgram } from '../../utils/typescript.js';
import { testCompare } from '../compare/utils.js';

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
    const file = generateTmpFileWithContent(`
        import { Foo, Bar, Qux } from 'test-module';
        const x = Foo(1234);
        const y = Qux(1234);
        const z: Bar = {
          one: '1234',
          two: 1234,
        }
    `);
    const projectProgram = createTsProgram(file);
    const sourceFile = projectProgram.getSourceFile(file);
    const comparison = testCompare(prevAPIWithoutChange, targetAPIWithChange);
    const usagePerSourceFile = getPackageUsage(
      projectProgram,
      getExportInfo(generateTmpFileWithContent(prevAPIWithoutChange)),
      'test-module'
    );
    const usages = usagePerSourceFile.values().next().value;
    const result = getIncompatibilitiesFromComparison({ sourceFile, comparison, usages: usages });
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
