import path from 'path';
import { getExportInfo } from '../compiler/exports.js';
import { generateTmpFileWithContent } from '../tests/test-utils.js';
import { createTsProgram } from '../utils/typescript.js';
import { getProjectUsageSetupForTesting } from './test-utils.js';
import { getFlattenPackageUsage, getPackageUsage, getUsageInfo } from './usage.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


const MINUTE_TIMEOUT = 60000;

describe('Usage', () => {
  const testingPackageSrc = `
    export function Foo(){}

    export function Bar(){}

    export function Baz(){}

    export function Qux(){}
  `;
  const testingModuleFile = generateTmpFileWithContent(testingPackageSrc);
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

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);
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

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);
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

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc,
        testingPackageName: 'testing-module',
      });

      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);
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

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc: packageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);

      expect(Object.keys(use)).toEqual(['FooBar', 'FooBar.method']);
    });

    it('should report usage of package object properties through variable assignments', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const fooBar = new FooBar();
        const t1 = fooBar;
        const t2 = t1;
        t2.method();

    `;

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc: packageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);

      expect(Object.keys(use)).toEqual(['FooBar', 'FooBar.method']);
    });

    it('should report usage of package object properties through proxy classes assignments', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const Proxy = FooBar;
        const t1 = new Proxy();
        const t2 = t1;
        t2.method();

    `;

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc: packageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);

      expect(Object.keys(use)).toEqual(['FooBar', 'FooBar.method']);
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

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc: packageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);

      expect(Object.keys(use)).toEqual(['FooBar', 'FooBar.method']);
    });

    it('should report usage of package object properties through proxy variable assignments', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const test = new FooBar();

        const get  = test.method

        get();
    `;
      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc: packageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);

      expect(Object.keys(use)).toEqual(['FooBar', 'FooBar.method']);
    });

    it('should report usage of package object properties through class extensions', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        class Bar extends FooBar{
        }

        const test = new Bar();
        test.method();
    `;

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc: packageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);

      expect(Object.keys(use)).toEqual(['FooBar', 'FooBar.method']);
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
      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc: packageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);

      expect(Object.keys(use)).toEqual(['FooBarInterface']);
    });

    // TODO detect usage through destructuring
    it('should not report usage of package object properties through destructuring', () => {
      const projectSrc = `
        import { FooBar } from 'testing-module';

        const { method } = new FooBar();
    `;

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc: packageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);

      expect(Object.keys(use)).toEqual(['FooBar']);
    });

    it('should report usage of package ENUM properties ', () => {
      const projectSrc = `
        import { FooBarEnum } from 'testing-module';

        const test = FooBarEnum.A;
    `;

      const { projectProgram, testingModuleExports, testingPackageName, projectFile } = getProjectUsageSetupForTesting({
        projectSrc,
        testingPackageSrc: packageSrc,
        testingPackageName: 'testing-module',
      });
      const usages = getPackageUsage(projectProgram, testingModuleExports, testingPackageName);
      const mainFile = Array.from(usages.keys()).find((f) => f.fileName === projectFile);
      const use = usages.get(mainFile);

      expect(Object.keys(use)).toEqual(['FooBarEnum', 'FooBarEnum.A']);
    });
  });

  // NOTE: We need MINUTE_TIMEOUTs because we are using the real file system,
  // and installing packages which is slow
  // https://github.com/grafana/levitate/blob/main/TYPECRIPT_NOTES.md
  describe('getUsageInfo high level API', () => {
    const originalCacheValue = process.env.LEVITATE_CACHE;

    beforeAll(() => {
      // force cache to not download the same package on each test
      process.env.LEVITATE_CACHE = 'true';
    });

    afterAll(() => {
      process.env.LEVITATE_CACHE = originalCacheValue;
    });

    const projectSrc = `
      import React, { FC } from 'react';
      import { GrafanaTheme2, DataFrameType } from '@grafana/data';
      import { useStyles2, AsyncSelectProps } from '@grafana/ui';

      const MyComponent: FC = ({ test }: { test: AsyncSelectProps<Number>['invalid'] }) => {
        const styles = useStyles2(getStyles);

        // Use styles with classNames
        return (
          <div className={styles.styleA} id={DataFrameType.HeatmapSparse}>
            ...
          </div>
        );
      };

      const getStyles = (theme: GrafanaTheme2) => ({
        styleA: '',
      });

      export default MyComponent;
    `;
    it(
      'should return a de-duplicated list of package usages from a module and list of filters (single file)',
      async () => {
        const projectPath = generateTmpFileWithContent(projectSrc);
        const usages = await getUsageInfo(projectPath, ['@grafana/data', '@grafana/ui']);
        expect(usages.length).toBe(4);

        const properties = usages.map((u) => u.propertyName);
        expect(properties).toEqual(['GrafanaTheme2', 'DataFrameType', 'useStyles2', 'AsyncSelectProps']);
      },
      MINUTE_TIMEOUT
    );

    it(
      'Should only report usages passed from the filtered packages',
      async () => {
        const projectPath = generateTmpFileWithContent(projectSrc);
        const usages = await getUsageInfo(projectPath, ['@grafana/data']);
        expect(usages.length).toBe(2);

        const properties = usages.map((u) => u.propertyName);
        expect(properties).toEqual(['GrafanaTheme2', 'DataFrameType']);
      },
      MINUTE_TIMEOUT
    );

    it(
      'Should only report usages passed from the filtered packages (part 2)',
      async () => {
        const projectPath = generateTmpFileWithContent(projectSrc);
        const usages = await getUsageInfo(projectPath, ['@grafana/ui']);
        expect(usages.length).toBe(2);

        const properties = usages.map((u) => u.propertyName);
        expect(properties).toEqual(['useStyles2', 'AsyncSelectProps']);
      },
      MINUTE_TIMEOUT
    );

    it.skip(
      'Should report usages from projects with multiple files and imports',
      async () => {
        const projectFile = path.join(__dirname, '../../fixtures/usage/grafana-plugin/module.ts');
        const usages = await getUsageInfo(projectFile, ['@grafana/data', '@grafana/ui']);

        expect(usages).toEqual([
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/panel.tsx'),
            propertyName: 'GrafanaTheme2',
            count: 2,
            packageName: '@grafana/data',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/panel.tsx'),
            propertyName: 'DataFrameType',
            count: 2,
            packageName: '@grafana/data',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/panel.tsx'),
            propertyName: 'DataFrameType.TimeSeriesLong',
            count: 1,
            packageName: '@grafana/data',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/panel.tsx'),
            propertyName: 'GrafanaTheme2.breakpoints',
            count: 1,
            packageName: '@grafana/data',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/module.ts'),
            propertyName: 'PanelPlugin',
            count: 2,
            packageName: '@grafana/data',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/module.ts'),
            propertyName: 'FieldColorModeId',
            count: 2,
            packageName: '@grafana/data',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/module.ts'),
            propertyName: 'PanelPlugin.setPanelOptions',
            count: 1,
            packageName: '@grafana/data',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/module.ts'),
            propertyName: 'PanelPlugin.useFieldConfig',
            count: 1,
            packageName: '@grafana/data',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/module.ts'),
            propertyName: 'FieldColorModeId.ContinuousGrYlRd',
            count: 1,
            packageName: '@grafana/data',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/panel.tsx'),
            propertyName: 'useStyles2',
            count: 2,
            packageName: '@grafana/ui',
          },
          {
            fileName: expect.stringContaining('fixtures/usage/grafana-plugin/panel.tsx'),
            propertyName: 'AsyncSelectProps',
            count: 2,
            packageName: '@grafana/ui',
          },
        ]);
      },
      MINUTE_TIMEOUT
    );
  });
});
