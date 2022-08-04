import { createProgram } from '..';
import { getAllIdentifiers } from '../utils.typescript';
import { generateTmpFileWithContent } from './test-utils';

describe('Typescript utils', () => {
  it('should return all the identifiers from a typescript node', () => {
    const filePath = generateTmpFileWithContent(`
        const x = Foo(1234);
        const y = Qux(1234);
        const z: Bar = {
          one: '1234',
          two: 1234,
        }
        function InnerFoo(x: number) {
          return 1;
        }
    `);
    const program = createProgram(filePath);
    const sourceFile = program.getSourceFile(filePath);
    const identifiers = getAllIdentifiers(sourceFile);
    expect(identifiers.length).toBe(10);
  });
});
