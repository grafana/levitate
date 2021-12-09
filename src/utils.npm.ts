import * as path from "path";
import * as fs from "fs";
import execa from "execa";
import { CliError } from "./utils.cli";
import { startSpinner, setSpinner, failSpinner, succeedSpinner } from "./utils.spinner";
import ora from "ora";
import tar from "tar";
import fetch from "node-fetch";

export const TYPE_DEFINITION_FILE_NAME = "index.d.ts";
export const TMP_FOLDER = ".tmp";
export const SPINNERS = [];

// Resolves a package name / URL to a package / path to a local package (usually coming from the command line),
// downloads the package if needed and returns an absolute path pointing to the `index.d.ts` file in the package folder.
// Throws an error if either the package was not found or the `index.d.ts` file is not present.
export async function resolvePackage(packageName: string) {
  const localPath = path.resolve(process.cwd(), packageName);

  // Local path
  if (fs.existsSync(localPath)) {
    if (fs.existsSync(getTypeDefinitionFilePath(localPath))) {
      return getTypeDefinitionFilePath(localPath);
    } else {
      const errorMsg = `Could not find type definition file at "${getTypeDefinitionFilePath(localPath)}"`;
      failSpinner(packageName, errorMsg);
      throw new Error(errorMsg);
    }
  }

  startSpinner(packageName);

  // Install NPM package
  // const installedPackagePath = await installNpmPackage(packageName);
  const installedPackagePath = await downloadNpmPackageAsTarball(packageName);
  const typeDefinitionFilePath = getTypeDefinitionFilePath(installedPackagePath);

  if (!fs.existsSync(typeDefinitionFilePath)) {
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
    await execa("npm", ["init", "-y"], { execPath: tmpPackageFolder });
    await execa("npm", ["install", packageName], { execPath: tmpPackageFolder });
  } catch (error) {
    failSpinner(packageName, `Failed installing ${packageName}`);
  }

  return getInstalledNpmPackagePath(packageName);
}

export async function uninstallPackage(packageName: string) {
  await removeTmpFolder(packageName);
}

export function getTmpFolderName(packageName: string) {
  return path.resolve(path.join(__dirname, "..", TMP_FOLDER, sanitize(packageName)));
}

export async function removeTmpFolder(packageName: string) {
  const tmpPackageFolder = getTmpFolderName(packageName);

  await execa("rm", ["-rf", tmpPackageFolder]);
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

export function sanitize(folder: string) {
  return folder.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}

export function getInstalledNpmPackagePath(packageName: string) {
  const tmpFolderName = getTmpFolderName(packageName);
  const packageNameWithoutVersion = packageName.replace(
    /@[~^]?(latest|canary|[\dvx*]+(?:[-.](?:[\dx*]+|alpha|beta))*)/gi,
    ""
  );

  return path.join(tmpFolderName, "node_modules", packageNameWithoutVersion);
}

export async function downloadNpmPackageAsTarball(packageName: string) {
  const tmpFolderName = await createTmpPackageFolder(packageName);
  const url = await getPackageTarBallUrl(packageName);
  const tarballPath = path.join(tmpFolderName, path.basename(url));

  setSpinner(packageName, `Downloading tarball for ${packageName}`);
  await downloadFile(url, tarballPath);

  tar.x({ C: tmpFolderName, file: tarballPath, sync: true });

  return path.join(tmpFolderName, "package");
}

export async function getPackageTarBallUrl(packageName: string) {
  setSpinner(packageName, `Fetching package tarball for ${packageName}`);

  const { stdout } = await execa("npm", ["view", packageName, "dist.tarball"]);

  return stdout;
}

export async function downloadFile(url: string, path: string) {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);

  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on("error", reject);
    fileStream.on("finish", resolve);
  });
}
