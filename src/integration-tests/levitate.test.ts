import path from 'path';
import { execa } from 'execa';
import { fileURLToPath } from 'url';

const nodeBinary = process.execPath;
const __dirname = fileURLToPath(new URL('.', import.meta.url));
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
});
