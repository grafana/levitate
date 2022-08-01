import { getNpmPackageDetails, PackageWithVersion } from '..';

const packageWithVersionRe = /(.+)(@.*?$)/;

/**
 * Given a string representation of a package and version (e.g. "package@version")
 * returns an array of objects wih the parsed package name and version.
 */
export async function resolveTargetPackages(target: string): Promise<PackageWithVersion[]> {
  const packages: PackageWithVersion[] = [];
  const items = target.trim().split(',');
  for (const item of items) {
    let pkg: PackageWithVersion;
    const trimmedItem = item.replace(/\s/g, '');
    if (trimmedItem === '') {
      continue;
    }
    const match = packageWithVersionRe.exec(trimmedItem);
    if (match) {
      pkg = {
        name: match[1].trim(),
        version: match[2].substring(1).trim(),
      };
    } else {
      pkg = {
        name: item.trim(),
        version: 'latest',
      };
    }
    console.log(`🔍 Resolving ${pkg.name}@${pkg.version}...`);
    const resolvedVersion = await resolvePackageVersion(pkg.name, pkg.version);
    if (resolvedVersion) {
      packages.push({ ...pkg, version: resolvedVersion });
    } else {
      throw new Error(`Could not find package ${pkg.name}@${pkg.version} in the npm registry`);
    }
  }

  return packages;
}

/**
 * Given a package and version it returns the resolved
 * version of the package using the npm registry.
 *
 * If a package or its version does not exist it returns undefined.
 */
async function resolvePackageVersion(pkg: string, version = 'latest'): Promise<string | void> {
  const details = await getNpmPackageDetails(pkg, version);
  if (details && details.version !== '') {
    return details.version;
  }
  return;
}
