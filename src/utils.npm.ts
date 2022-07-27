import * as fs from 'fs';
import * as path from 'path';
import tar from 'tar';
import fetch from 'node-fetch';
import execa from 'execa';
import { pathExists } from './utils.file';
import { startSpinner, setSpinner, failSpinner, succeedSpinner } from './utils.spinner';
import { dirname } from 'path';
import { NpmList, NpmListDependency } from '.';

export const TYPE_DEFINITION_FILE_NAME = 'index.d.ts';
export const TMP_FOLDER = '.tmp';
export const SPINNERS = [];

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
    await execa('npm', ['init', '-y'], { execPath: tmpPackageFolder });
    await execa('npm', ['install', packageName], { execPath: tmpPackageFolder });
  } catch (error) {
    failSpinner(packageName, `Failed installing ${packageName}`);
  }

  return getInstalledNpmPackagePath(packageName);
}

export async function uninstallPackage(packageName: string) {
  await removeTmpFolder(packageName);
}

export function getTmpFolderName(packageName: string) {
  return path.resolve(path.join(__dirname, '..', TMP_FOLDER, packageName));
}

export async function removeTmpFolder(packageName: string) {
  const tmpPackageFolder = getTmpFolderName(packageName);

  await execa('rm', ['-rf', tmpPackageFolder]);
}

export async function createTmpPackageFolder(packageName: string) {
  const tmpPackageFolder = getTmpFolderName(packageName);

  setSpinner(packageName, `Creating temporary folder for "${packageName}"`);
  await removeTmpFolder(packageName);

  fs.mkdirSync(tmpPackageFolder, { recursive: true });

  return tmpPackageFolder;
}

export function getTypeDefinitionFilePath(folder: string) {
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

  setSpinner(packageName, `Downloading tarball for ${packageName}`);
  await downloadFile(url, tarballPath);

  tar.x({ C: tmpFolderName, file: tarballPath, sync: true });

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
    fileStream.on('finish', resolve);
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

  return require(getPackageJsonPath(packagePath));
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
  const result = await execa('npm', ['list', '--json', '--depth', '0'], { cwd: dirname(path) });
  try {
    const pkgInfo = JSON.parse(result.stdout) as NpmList;
    if (pkgInfo.dependencies) {
      for (const pkg of Object.keys(pkgInfo.dependencies)) {
        if (pkg === pkgName) {
          console.log(`✔ Found ${pkgName} version ${pkgInfo.dependencies[pkg].version} locally`);
          return pkgInfo.dependencies[pkg].version ?? undefined;
        }
      }
    }
  } catch (e) {
    return;
  }
}
