import execa from 'execa';
import { getNpmPackageDetails, resolveTargetPackages } from './utils.npm';

jest.mock('execa');

(execa as unknown as jest.Mock).mockImplementation(async (...args) => {
  const parsed = args[1][1].split('@');
  const version = parsed[parsed.length - 1];
  return {
    stdout: JSON.stringify({
      version,
    }),
    stderr: '',
  };
});

describe('Packages', () => {
  it('parses an array of packages with version and returns the serialized information', async () => {
    const packages = [
      '@grafana/data@9.0.1',
      '@types/node',
      '@types/node@8.0.0',
      '@testme',
      ' testme@1.0 ',
      ' withspaces   ',
    ];
    const expected = [
      {
        name: '@grafana/data',
        version: '9.0.1',
      },
      {
        name: '@types/node',
        version: 'latest',
      },
      {
        name: '@types/node',
        version: '8.0.0',
      },
      {
        name: '@testme',
        version: 'latest',
      },
      {
        name: 'testme',
        version: '1.0',
      },
      {
        name: 'withspaces',
        version: 'latest',
      },
    ];
    expect(await resolveTargetPackages(packages.join(','))).toEqual(expected);
    // with spaces between packages
    expect(await resolveTargetPackages(packages.join(' , '))).toEqual(expected);
  });
});
