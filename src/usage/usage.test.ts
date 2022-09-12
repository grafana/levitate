import { getExportInfo } from '../compiler/exports';
import { generateTmpFileWithContent } from '../tests/test-utils';
import { createTsProgram } from '../utils/typescript';
import { getUsageOf } from './usage';

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

    const usages = getUsageOf(projectProgram, testingModuleExports, 'testing-module');
    const usagesNames = Object.keys(usages);
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

    const usages = getUsageOf(projectProgram, testingModuleExports, 'testing-module');
    const usagesNames = Object.keys(usages);
    expect(usagesNames).toEqual(['Bar', 'Baz', 'Qux']);

    const usages2 = getUsageOf(projectProgram, otherModuleExports, 'other-module');
    const usagesNames2 = Object.keys(usages2);
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

    const usages = getUsageOf(projectProgram, testingModuleExports, 'testing-module');
    const usagesNames = Object.keys(usages);
    expect(usagesNames).toEqual(['Bar']);
  });
});
