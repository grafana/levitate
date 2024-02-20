import path from 'path';
import { execa } from 'execa';

const __dirname = import.meta.dirname;
const nodeBinary = process.execPath;
const levitateBinary = path.resolve(__dirname, '../../dist/bin.js');

describe('Levitate', () => {
  describe('Shows help texts', () => {
    it('Shows a help text for the compare command', async () => {
      const { stdout } = await execa(nodeBinary, [levitateBinary, 'compare', '--help']);
      expect(stdout).toContain('Compares the exports of packages');
    });

    it('Shows a help text for the is-compatible command', async () => {
      const { stdout } = await execa(nodeBinary, [levitateBinary, 'is-compatible', '--help']);
      expect(stdout).toContain('Checks for incompatibilities between the passed path and modules');
    });

    it('Shows a help text for the list-exports command', async () => {
      const { stdout } = await execa(nodeBinary, [levitateBinary, 'list-exports', '--help']);
      expect(stdout).toContain('Lists exported members of a TypeScript module');
    });

    it('Shows a help text for the list-imports command', async () => {
      const { stdout } = await execa(nodeBinary, [levitateBinary, 'list-imports', '--help']);
      expect(stdout).toContain('Lists imports used by a TypeScript module.');
    });
  });

  describe('Levignore works as expected', () => {
    const levignoreFixturePath = path.resolve(__dirname, '../../fixtures/levignore');
    it("Doesn't report changes that are ignored by levignore", async () => {
      const { stdout } = await execa(
        nodeBinary,
        [levitateBinary, 'compare', '--prev', './package1', '--current', './package2'],
        {
          cwd: levignoreFixturePath,
        }
      );
      expect(stdout).toContain('No breaking changes introduced');
    });
  });

  describe('Comparison json output works as expected', () => {
    const comparisonJsonFixturePath = path.resolve(__dirname, '../../fixtures/compare');
    it('Outputs a JSON string representation of the compatibility report', async () => {
      let stdout: string;

      // this command will fail because compare will exit 1
      try {
        await execa(
          nodeBinary,
          [levitateBinary, 'compare', '--prev', './bundle-old.ts', '--current', './bundle-new.ts', '--json'],
          {
            cwd: comparisonJsonFixturePath,
          }
        );
      } catch (e) {
        stdout = e.stdout;
      }
      const parsed = JSON.parse(stdout);
      expect(parsed).toBeTruthy();

      expect(Object.keys(parsed)).toEqual(['additions', 'removals', 'changes', 'hasBreakingChanges']);

      expect(parsed.hasBreakingChanges).toBe(true);
      expect(parsed.additions.length).toBe(3);
      expect(parsed.removals.length).toBe(0);
      expect(parsed.changes.length).toBe(2);
    });
  });
});
