import path from 'path';
import { getExportInfo } from './exports';

describe('Compile exports test', () => {
  describe('getExportInfo', () => {
    it('should return the export info', () => {
      const file = path.resolve(__dirname, '../../fixtures', 'exports', 'package1', 'index.ts');
      const result = getExportInfo(file);
      const exportedNames = Object.keys(result.exports);
      expect(exportedNames).toEqual(['inlined', 'mainInstance', 'data2', 'data', 'test', 'test2', 'Test3']);
    });
  });
});
