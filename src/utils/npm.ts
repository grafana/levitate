import { execa } from 'execa';
import fs from 'fs';
import fetch from 'node-fetch';
import path, { dirname } from 'path';
import { extract } from 'tar/x';
import os from 'os';
import { NpmList, PackageWithVersion } from '../types.js';
import { pathExists } from './file.js';
import { failSpinner, setSpinner, startSpinner, succeedSpinner } from './spinner.js';
import { logDebug, logInfo } from './log.js';
import { readJsonFile } from '../utils.js';

export const TYPE_DEFINITION_FILE_NAME = 'index.d.ts';
export const SPINNERS = [];
const shouldCacheExternal = !!process.env.LEVITATE_CACHE || false;
// The `packageName` is a string that can be any of the following:
// - an NPM package identifier, e.g. "@grafana/ui@canary"
// - a path to a local TypeScript file, e.g. "./app/main.ts"
// - a path to a local package folder e.g. "./packages/my-buttons/dist"
// - a valid URL that points to an NPM package
//
// The function takes care of downloading the package if needed and then returns a path to the locally persisted package folder,
// or just returns the local path if no fetching was needed.
export async function resolvePackage(packageName: string) {
  const localPath = path.resolve(process.cwd(), packageName);

  // Local path
  if (pathExists(localPath)) {
    const stat = fs.lstatSync(localPath);

    // It is pointing to a package directory with a `index.d.ts` file in it
    if (stat.isDirectory() && pathExists(getTypeDefinitionFilePath(localPath))) {
      return getTypeDefinitionFilePath(localPath);
    }

    // No `index.d.ts` file found in the package directory
    else if (stat.isDirectory()) {
      const errorMsg = `Could not find type definition file at "${getTypeDefinitionFilePath(localPath)}"`;
      failSpinner(packageName, errorMsg);
      throw new Error(errorMsg);
    }

    // It is pointing to a single file
    else {
      return localPath;
    }
  }

  startSpinner(packageName);

  // Install NPM package
  // const installedPackagePath = await installNpmPackage(packageName);
  const installedPackagePath = await downloadNpmPackageAsTarball(packageName);
  const typeDefinitionFilePath = getTypeDefinitionFilePath(installedPackagePath);

  if (!pathExists(typeDefinitionFilePath)) {
    const errorMsg = `Could not find type definition file at "${getTypeDefinitionFilePath(localPath)}"`;
    failSpinner(packageName, errorMsg);
    throw new Error(errorMsg);
  }

  succeedSpinner(packageName, `Installed ${packageName} successfully`);

  return typeDefinitionFilePath;
}

export async function installNpmPackage(packageName: string) {
  const tmpPackageFolder = await createTmpPackageFolder(packageName);

  setSpinner(packageName, `Installing ${packageName}`);

  try {
    process.chdir(tmpPackageFolder);
    await execa('npm', ['init', '-y'], { nodePath: tmpPackageFolder });
    await execa('npm', ['install', packageName], { nodePath: tmpPackageFolder });
  } catch (error) {
    failSpinner(packageName, `Failed installing ${packageName}`);
  }

  return getInstalledNpmPackagePath(packageName);
}

export async function uninstallPackage(packageName: string) {
  await removeTmpFolder(packageName);
}

export function getTmpFolderName(packageName: string) {
  return path.resolve(path.join(os.tmpdir(), packageName));
}

export async function removeTmpFolder(packageName: string) {
  const tmpPackageFolder = getTmpFolderName(packageName);

  // remove existing tmp files unless we are caching
  if (!shouldCacheExternal) {
    await execa('rm', ['-rf', tmpPackageFolder]);
  }
}

export async function createTmpPackageFolder(packageName: string) {
  const tmpPackageFolder = getTmpFolderName(packageName);

  logDebug(`Creating tmp folder at ${tmpPackageFolder} for ${packageName}`);
  setSpinner(packageName, `Creating temporary folder for "${packageName}"`);
  await removeTmpFolder(packageName);

  fs.mkdirSync(tmpPackageFolder, { recursive: true });

  return tmpPackageFolder;
}

export function getTypeDefinitionFilePath(folder: string) {
  const packageJson = getPackageJson(folder);

  // if available use the package.json property that references a type definition file
  if (packageJson) {
    const typeProp = ['types', 'typings'].find((prop) => packageJson[prop] !== undefined);
    if (typeProp) {
      const typeDefinitionFilePath = packageJson[typeProp];
      return path.join(folder, typeDefinitionFilePath);
    }
  }

  return path.join(folder, TYPE_DEFINITION_FILE_NAME);
}

export function getInstalledNpmPackagePath(packageName: string) {
  const tmpFolderName = getTmpFolderName(packageName);
  const packageNameWithoutVersion = packageName.replace(
    /@[~^]?(latest|canary|[\dvx*]+(?:[-.](?:[\dx*]+|alpha|beta))*)/gi,
    ''
  );

  return path.join(tmpFolderName, 'node_modules', packageNameWithoutVersion);
}

export async function downloadNpmPackageAsTarball(packageName: string) {
  const tmpFolderName = await createTmpPackageFolder(packageName);
  const url = await getPackageTarBallUrl(packageName);

  if (!url) {
    throw new Error(`Could not resolve package "${packageName}". Are you sure it exists?`);
  }

  const tarballPath = path.join(tmpFolderName, path.basename(url));
  const shouldDownload = !pathExists(tarballPath) || !(shouldCacheExternal && pathExists(tarballPath));

  if (shouldDownload) {
    setSpinner(packageName, `Downloading tarball for ${packageName}`);
    await downloadFile(url, tarballPath);
    extract({ C: tmpFolderName, file: tarballPath, sync: true });
  } else {
    logDebug('\nUsing download cache. Flag passed: LEVITATE_CACHE=true');
  }

  return path.join(tmpFolderName, 'package');
}

export async function getPackageTarBallUrl(packageName: string) {
  setSpinner(packageName, `Fetching package tarball for ${packageName}`);

  const { stdout } = await execa('npm', ['view', packageName, 'dist.tarball']);

  return stdout;
}

export async function downloadFile(url: string, path: string) {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);

  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on('error', reject);
    fileStream.on('finish', () => resolve(undefined));
  });
}

export function getPackageJsonPath(packagePath: string): string {
  return path.join(packagePath, 'package.json');
}

export function hasPackageJson(packagePath: string): boolean {
  return pathExists(getPackageJsonPath(packagePath));
}

export function getPackageJson(packagePath: string): any {
  if (!hasPackageJson(packagePath)) {
    return null;
  }

  return readJsonFile(getPackageJsonPath(packagePath));
}

export function getNpmDependencies(packagePath: string): Record<string, string> {
  const packageJson = getPackageJson(packagePath);

  if (!packageJson) {
    return {};
  }

  return { ...packageJson.dependencies, ...packageJson.devDependencies };
}
/*
 * Returns the information of an npm package as a JSON object
 * or undefined if the package does not exist.
 */
export async function getNpmPackageDetails(
  packageName: string,
  version = 'latest'
): Promise<{
  name: string;
  versions: string[];
  version: string;
  _id: string;
} | void> {
  const result = await execa('npm', ['view', `${packageName}@${version}`, '--json']);
  try {
    const details = JSON.parse(result.stdout);
    return details;
  } catch (e) {
    return;
  }
}

/**
 * Returns the version of an installed dependency on the passed path
 * or undefined if the dependency is not installed.
 * It uses npm list to list a project's dependencies
 */
export async function getNpmPackageVersionFromProjectPath(path: string, pkgName: string): Promise<string | void> {
  let listJson = '';
  try {
    const result = await execa('npm', ['list', '--json', '--depth', '0'], { cwd: dirname(path) });
    listJson = result.stdout;
  } catch (e) {
    //sometimes npm list fails with a parsing error
    //but still returns valid json in the stdout.
    listJson = e.stdout;
  }
  try {
    const pkgInfo = JSON.parse(listJson) as NpmList;
    if (pkgInfo.dependencies) {
      for (const pkg of Object.keys(pkgInfo.dependencies)) {
        if (pkg === pkgName) {
          logInfo(`✔ Found ${pkgName} version ${pkgInfo.dependencies[pkg].version} locally`);
          return pkgInfo.dependencies[pkg].version ?? undefined;
        }
      }
    }
  } catch (e) {
    logInfo('Could not retrieve version information about the package ' + pkgName);
    return;
  }
}

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
    logInfo(`🔍 Resolving ${pkg.name}@${pkg.version}...`);
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
  try {
    const details = await getNpmPackageDetails(pkg, version);
    if (details && details.version !== '') {
      return details.version;
    }
  } catch {}
}
