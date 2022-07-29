import { getNpmPackageDetails } from '..';
import { resolveTargetPackages } from './packages';

jest.mock('../');

describe('Packages', () => {
  it('parses an array of packages with version and returns the serialized information', async () => {
    (getNpmPackageDetails as jest.Mock).mockImplementation(async (_pkg: string, version: string) => {
      return {
        version: version,
      };
    });
    const packages = ['@grafana/data@9.0.1', '@types/node', '@types/node@8.0.0'].join(',');
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
    ];
    expect(await resolveTargetPackages(packages)).toEqual(expected);
  });
});
