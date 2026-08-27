import { getIncompatibilitiesBetweenPackages } from '../../comparison/source.js';
import { getNpmPackageVersionFromProjectPath } from '../../utils/npm.js';
import { isCompatible } from './is-compatible.js';

vi.mock('../../comparison/source.js', () => ({
  getIncompatibilitiesBetweenPackages: vi.fn().mockResolvedValue([]),
}));

vi.mock('../../utils/npm.js', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../../utils/npm.js')>();
  return {
    ...actual,
    getNpmPackageVersionFromProjectPath: vi.fn().mockResolvedValue('10.4.0'),
  };
});

vi.mock('../../utils/typescript.js', () => ({
  createTsProgram: vi.fn().mockReturnValue({}),
}));

describe('isCompatible() with minVersion', () => {
  beforeEach(() => {
    vi.mocked(getIncompatibilitiesBetweenPackages).mockReset().mockResolvedValue([]);
    vi.mocked(getNpmPackageVersionFromProjectPath).mockReset().mockResolvedValue('10.4.0');
  });

  it('uses installed version as baseline when minVersion is not provided', async () => {
    await isCompatible(
      '/fake/path',
      [{ name: '@grafana/data', version: 'latest' }],
      { printIncompatibilities: false, force: false, markdown: false },
      {}
    );

    expect(getIncompatibilitiesBetweenPackages).toHaveBeenCalledWith(
      expect.anything(),
      '@grafana/data@10.4.0',
      '@grafana/data@latest',
      {}
    );
  });

  it('uses minVersion as baseline when provided', async () => {
    await isCompatible(
      '/fake/path',
      [{ name: '@grafana/data', version: 'latest' }],
      { printIncompatibilities: false, force: false, markdown: false, minVersion: '9.5.0' },
      {}
    );

    expect(getIncompatibilitiesBetweenPackages).toHaveBeenCalledWith(
      expect.anything(),
      '@grafana/data@9.5.0',
      '@grafana/data@latest',
      {}
    );
  });

  it('checks all packages with minVersion as baseline', async () => {
    await isCompatible(
      '/fake/path',
      [
        { name: '@grafana/data', version: 'latest' },
        { name: '@grafana/ui', version: 'latest' },
      ],
      { printIncompatibilities: false, force: false, markdown: false, minVersion: '10.0.0' },
      {}
    );

    expect(getIncompatibilitiesBetweenPackages).toHaveBeenCalledTimes(2);
    expect(getIncompatibilitiesBetweenPackages).toHaveBeenCalledWith(
      expect.anything(),
      '@grafana/data@10.0.0',
      '@grafana/data@latest',
      {}
    );
    expect(getIncompatibilitiesBetweenPackages).toHaveBeenCalledWith(
      expect.anything(),
      '@grafana/ui@10.0.0',
      '@grafana/ui@latest',
      {}
    );
  });

  it('skips package when not installed and force is false', async () => {
    vi.mocked(getNpmPackageVersionFromProjectPath).mockResolvedValue(undefined);

    await isCompatible(
      '/fake/path',
      [{ name: '@grafana/data', version: 'latest' }],
      { printIncompatibilities: false, force: false, markdown: false, minVersion: '9.5.0' },
      {}
    );

    expect(getIncompatibilitiesBetweenPackages).not.toHaveBeenCalled();
  });
});
