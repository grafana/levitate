import { getExportInfo } from '../compiler/exports';
import { generateTmpFileWithContent } from '../tests/test-utils';
import { IdentifierWithCounter } from '../types';
import { createTsProgram } from '../utils/typescript';
import { getUsageOfPackageExports } from './usage';

describe('Usage', () => {
  const methodsExportsTestingModule = `
  export function Foo(){}

  export function Bar(){}

  export function Baz(){}

  export function Qux(){}
  `;
  const testingModuleFile = generateTmpFileWithContent(methodsExportsTestingModule);
  const methodsExportsOtherModule = `
  export function Foo(){}

  export function Cox(){}

  export function Mox(){}

  export function Tox(){}
  `;
  const otherModuleFile = generateTmpFileWithContent(methodsExportsOtherModule);

  it('should detect basic usage of direct methods exports', () => {
    const projectSrc = `
    import { Foo, Bar, Baz, Qux } from 'testing-module';
    Foo();
    Bar();
    Baz();
    Qux();
    `;
    const projectFile = generateTmpFileWithContent(projectSrc);

    const testingModuleExports = getExportInfo(testingModuleFile);

    const projectProgram = createTsProgram(projectFile);

    const usages = getUsageOfPackageExports(projectProgram, testingModuleExports, 'testing-module');
    const value = usages.values().next().value;
    const usagesNames = Object.keys(value);
    expect(usagesNames).toEqual(['Foo', 'Bar', 'Baz', 'Qux']);
  });

  it('should differentiate from usages of other modules with similar names', () => {
    const projectSrc = `
    import { Bar, Baz, Qux } from 'testing-module';
    import { Foo } from 'other-module';
    Foo();
    Bar();
    Baz();
    Qux();
    `;
    const projectFile = generateTmpFileWithContent(projectSrc);

    const testingModuleExports = getExportInfo(testingModuleFile);
    const otherModuleExports = getExportInfo(otherModuleFile);

    const projectProgram = createTsProgram(projectFile);

    const usages = getUsageOfPackageExports(projectProgram, testingModuleExports, 'testing-module');
    const value = usages.values().next().value;
    const usagesNames = Object.keys(value);
    expect(usagesNames).toEqual(['Bar', 'Baz', 'Qux']);

    const usages2 = getUsageOfPackageExports(projectProgram, otherModuleExports, 'other-module');
    const value2 = usages2.values().next().value;
    const usagesNames2 = Object.keys(value2);
    expect(usagesNames2).toEqual(['Foo']);
  });

  it('Should only report usages from the passed package name', () => {
    const projectSrc = `
    import { Bar } from 'testing-module';
    thisis();
    a();
    usage();
    Foo(); // should not be reported
    but();
    thenext();
    is();
    Bar(); // should be reported
    `;
    const projectFile = generateTmpFileWithContent(projectSrc);

    const testingModuleExports = getExportInfo(testingModuleFile);

    const projectProgram = createTsProgram(projectFile);

    const usages = getUsageOfPackageExports(projectProgram, testingModuleExports, 'testing-module');
    const value = usages.values().next().value;
    const usagesNames = Object.keys(value);
    expect(usagesNames).toEqual(['Bar']);
  });

  it('Should correctly count how many times an API is used', () => {
    const projectSrc = `
    import { Bar, Baz, Qux } from 'testing-module';
    import { Foo } from 'other-module';

    Qux();
    Qux();
    Foo();
    Foo();
    Bar();
    Bar();
    Bar();
    Baz();
    Qux();
    Qux();
    `;

    //notice that importing the API itself counts as usage
    const counters = {
      Bar: 4, // 3 usages, 1 import
      Qux: 5, // 4 usages, 1 import
      Baz: 2, // 1 usage, 1 import
      // Foo: 0 // 0 usages because it is not imported from testing-module
    };
    const projectFile = generateTmpFileWithContent(projectSrc);

    const testingModuleExports = getExportInfo(testingModuleFile);

    const projectProgram = createTsProgram(projectFile);

    const usages = getUsageOfPackageExports(projectProgram, testingModuleExports, 'testing-module');
    const value = usages.values().next().value as Record<string, IdentifierWithCounter>;
    for (const key in counters) {
      expect(value[key].count).toEqual(counters[key]);
    }
  });
});
