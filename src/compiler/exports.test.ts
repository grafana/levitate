import { SourceFile } from 'typescript';
import { pathExists } from '../utils/file';
import { resolveModuleName } from './exports';

jest.mock('../utils/file');
const pathExistsMock = pathExists as jest.Mock;

describe('Compile exports test', () => {
  describe('resolve module name', () => {
    it('should resolve the module name with the d.ts extension', () => {
      pathExistsMock.mockReturnValue(true);

      const file = resolveModuleName('testme', { fileName: '/test/env/source.ts' } as SourceFile);
      expect(file).toBe('/test/env/testme.d.ts');
    });

    it('should resolve the module name when points to an index.ts file', () => {
      pathExistsMock.mockImplementation((file: string) => {
        if (file === '/test/env/testme.d.ts') {
          return false;
        }
        return true;
      });

      const file = resolveModuleName('testme', { fileName: '/test/env/source.ts' } as SourceFile);
      expect(file).toBe('/test/env/testme/index.d.ts');
    });

    it('should resolve to a file if the module name has an extension', () => {
      pathExistsMock.mockImplementation((file: string) => {
        if (file === '/test/env/testme-with-ext.ts') {
          return true;
        }
        return false;
      });

      const file = resolveModuleName('testme-with-ext.ts', { fileName: '/test/env/source.ts' } as SourceFile);
      expect(file).toBe('/test/env/testme-with-ext.ts');
    });

    it('should return undefined if could not find a file it points to', () => {
      pathExistsMock.mockReturnValue(false);

      const file = resolveModuleName('testme-with-ext.ts', { fileName: '/test/env/source.ts' } as SourceFile);
      expect(file).toBe(undefined);
    });
  });
});
