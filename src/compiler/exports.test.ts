import path from 'path';
import { getExportInfo } from './exports.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('Compile exports test', () => {
  describe('getExportInfo', () => {
    it('should return the export info of files with re-exports from other files', () => {
      const file = path.resolve(__dirname, '../../fixtures', 'exports', 'package1', 'index.ts');
      const result = getExportInfo(file);
      const exportedNames = Object.keys(result.exports);
      expect(exportedNames).toEqual([
        'inlined',
        'mainInstance',
        'FooEnum',
        'FooEnum.A',
        'FooEnum.B',
        'FooEnum.C',
        'FooClass',
        'FooClass.foo',
        'FooClass.publicField',
        'FooClass.method1',
        'FooClass.method2',
        'FooClass.staticMethod',
        'FooClass.staticMethod2',
        'SubFooClass',
        'SubFooClass.foo',
        'SubFooClass.method1',
        'SubFooClass.subMethod',
        'data2',
        'data',
        'data.test',
        'test',
        'test2',
        'Test3',
        'Test3.test',
      ]);
    });
  });
});
