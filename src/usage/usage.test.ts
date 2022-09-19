import { getExportInfo } from '../compiler/exports';
import { generateTmpFileWithContent } from '../tests/test-utils';
import { createTsProgram } from '../utils/typescript';
import { getUsageForTesting } from './test-utils';
import { getFlattenPackageUsage, getPackageUsage } from './usage';

describe('Usage', () => {
  const testingModuleSrc = `
  export function Foo(){}

  export function Bar(){}

  export function Baz(){}

  export function Qux(){}
  `;
  const testingModuleFile = generateTmpFileWithContent(testingModuleSrc);
  const otherTestingModuleSrc = `
  export function Foo(){}

  export function Cox(){}

  export function Mox(){}

  export function Tox(){}
  `;
  const otherModuleFile = generateTmpFileWithContent(otherTestingModuleSrc);

  describe('Top exports usage', () => {
    it('should detect basic usage of direct methods exports', () => {
      const projectSrc = `
    import { Foo, Bar, Baz, Qux } from 'testing-module';
    Foo();
    Bar();
    Baz();
    Qux();
    `;

      const use = getUsageForTesting({
        projectSrc,
        testingModuleSrc: testingModuleSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(use)).toEqual(['Foo', 'Bar', 'Baz', 'Qux']);
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

      const usages = getPackageUsage(projectProgram, testingModuleExports, 'testing-module');
      const value = usages.values().next().value;
      const usagesNames = Object.keys(value);
      expect(usagesNames).toEqual(['Bar', 'Baz', 'Qux']);

      const usages2 = getPackageUsage(projectProgram, otherModuleExports, 'other-module');
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

      const use = getUsageForTesting({
        projectSrc,
        testingModuleSrc: testingModuleSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(use)).toEqual(['Bar']);
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

      const use = getUsageForTesting({
        projectSrc,
        testingModuleSrc: testingModuleSrc,
        testingModuleName: 'testing-module',
      });
      for (const key in counters) {
        expect(use[key].count).toEqual(counters[key]);
      }
    });

    it('returns a flatten version of the usages', () => {
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
      const counters = {
        Bar: 4, // 3 usages, 1 import
        Qux: 5, // 4 usages, 1 import
        Baz: 2, // 1 usage, 1 import
        // Foo: 0 // 0 usages because it is not imported from testing-module
      };
      const projectFile = generateTmpFileWithContent(projectSrc);
      const testingModuleExports = getExportInfo(testingModuleFile);
      const projectProgram = createTsProgram(projectFile);
      const flattenUsages = getFlattenPackageUsage(projectProgram, testingModuleExports, 'testing-module');
      expect(flattenUsages.length).toEqual(3);
      for (const usage of flattenUsages) {
        expect(usage.count).toEqual(counters[usage.propertyName]);
      }
    });
  });

  describe('Object properties usage', () => {
    const packageSrc = `
      export function Qux(){}

      export type Foo = 'foo';

      export class FooBar{
        public internal(){}
        public method(){}
      }

      export interface FooBarInterface{
        method(): void;
        attr: string;
      }

      export enum FooBarEnum{
        A = 'A',
        B = 'B',
        C = 'C'
      }
    `;

    it('should report basic usage of package object properties', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const fooBar = new FooBar();
        fooBar.method();
        `;

      const usages = getUsageForTesting({
        projectSrc,
        testingModuleSrc: packageSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(usages)).toEqual(['FooBar', 'FooBar.method']);
    });

    it('should report usage of package object properties through variable assignments', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const fooBar = new FooBar();
        const t1 = fooBar;
        const t2 = t1;
        t2.method();

    `;

      const usages = getUsageForTesting({
        projectSrc,
        testingModuleSrc: packageSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(usages)).toEqual(['FooBar', 'FooBar.method']);
    });

    it('should report usage of package object properties through proxy classes assignments', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const Proxy = FooBar;
        const t1 = new Proxy();
        const t2 = t1;
        t2.method();

    `;

      const usages = getUsageForTesting({
        projectSrc,
        testingModuleSrc: packageSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(usages)).toEqual(['FooBar', 'FooBar.method']);
    });

    it('should report usage of package object properties through proxy methods assignments', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const test = new FooBar();

        const tt = {
          get: test.method
        }

        tt.get();
    `;

      const usages = getUsageForTesting({
        projectSrc,
        testingModuleSrc: packageSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(usages)).toEqual(['FooBar', 'FooBar.method']);
    });

    it('should report usage of package object properties through proxy variable assignments', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const test = new FooBar();

        const get  = test.method

        get();
    `;

      const usages = getUsageForTesting({
        projectSrc,
        testingModuleSrc: packageSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(usages)).toEqual(['FooBar', 'FooBar.method']);
    });

    it('should report usage of package object properties through class extensions', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        class Bar extends FooBar{
        }

        const test = new Bar();
        test.method();
    `;

      const usages = getUsageForTesting({
        projectSrc,
        testingModuleSrc: packageSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(usages)).toEqual(['FooBar', 'FooBar.method']);
    });

    //TODO detect usage through interface extension
    it('should not report usage of package object properties through interface extensions', () => {
      const projectSrc = `
        import { FooBarInterface } from 'testing-module';

        class Bar extends FooBarInterface{
          method(){}
        }

        const test = new Bar();
        test.method();
    `;

      const usages = getUsageForTesting({
        projectSrc,
        testingModuleSrc: packageSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(usages)).toEqual(['FooBarInterface']);
    });

    // TODO detect usage through destructuring
    it('should not report usage of package object properties through destructuring', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const { method } = new FooBar();
    `;

      const usages = getUsageForTesting({
        projectSrc,
        testingModuleSrc: packageSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(usages)).toEqual(['FooBar']);
    });

    it('should report usage of package ENUM properties ', () => {
      const projectSrc = `
        import { FooBarEnum } from 'testing-module';

        const test = FooBarEnum.A;
    `;

      const usages = getUsageForTesting({
        projectSrc,
        testingModuleSrc: packageSrc,
        testingModuleName: 'testing-module',
      });
      expect(Object.keys(usages)).toEqual(['FooBarEnum', 'FooBarEnum.A']);
    });
  });
});
