import fs from "fs";
import path from "path";
import { CompareCLIArgs, ListCLIArgs, GobbleCLIArgs } from "./types";
import { installPackage, uninstallPackage, getTypeDefinitionFilePath } from "./utils.npm";

export class CliError extends Error {}

// Can be used for validating CLI arguments in a more semantic way
export function getCompareCliArgs({ prevPackage, currentPackage, prevPath, currentPath }): CompareCLIArgs {
  // Using direct paths
  if (prevPath && currentPath) {
    return {
      prevPath,
      currentPath,
    };

    // Missing direct paths
  } else if (prevPath || currentPath) {
    throw new CliError("Please provide both `--current-path` and `--prev-path` when using direct paths.");

    // Using package paths (will resolve to .d.ts files)
  } else if (prevPackage && currentPackage) {
    return {
      prevPath: prevPackage,
      currentPath: currentPackage,
    };

    // Missing package paths
  } else if (prevPackage || currentPackage) {
    throw new CliError("Please provide both `--current-package` and `--prev-package` when using package paths.");

    // Missing options
  } else {
    throw new CliError("Please check how to use this command.");
  }
}

// Can be used for validating CLI arguments in a more semantic way
export function getListImportsCliArgs({ path, verbose, json, filters }): ListCLIArgs {
  // Missing properties
  if (!path) {
    throw new CliError("Please check how to use this command.");
  }

  return { path, isVerbose: verbose, isJson: json, filters };
}

export function getGobbleCliArgs({ repositories, cacheDir, filters, jsonlines }): GobbleCLIArgs {
  // Missing properties
  if (!repositories) {
    throw new CliError("Please check how to use this command.");
  }

  return { repositories, cacheDir, filters, jsonlines: Boolean(jsonlines) };
}

// Resolves a package name / URL to a package / path to a local package (usually coming from the command line),
// downloads the package if needed and returns an absolute path pointing to the `index.d.ts` file in the package folder.
// Throws an error if either the package was not found or the `index.d.ts` file is not present.
export async function resolvePackage(packageName: string) {
  const localPath = path.resolve(process.cwd(), packageName);

  // Local path
  if (fs.existsSync(localPath)) {
    return getTypeDefinitionFilePath(localPath);
  }

  // Install NPM package
  const tmpFolderName = await installPackage(packageName);
  const typeDefinitionFilePath = getTypeDefinitionFilePath(tmpFolderName);

  if (!fs.existsSync(typeDefinitionFilePath)) {
    throw new CliError(`Could not find "index.d.ts" for "${packageName}" at "${tmpFolderName}".`);
  }

  return typeDefinitionFilePath;
}
