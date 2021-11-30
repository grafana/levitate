import { CompareCLIArgs, ListCLIArgs } from "./types";

export class CliError extends Error {}

export function getCompareCliArgs({
  prevPackage,
  currentPackage,
  prevPath,
  currentPath,
}): CompareCLIArgs {
  // Using direct paths
  if (prevPath && currentPath) {
    return {
      prevPath,
      currentPath,
    };

    // Missing direct paths
  } else if (prevPath || currentPath) {
    throw new CliError(
      "Please provide both `--current-path` and `--prev-path` when using direct paths."
    );

    // Using package paths (will resolve to .d.ts files)
  } else if (prevPackage && currentPackage) {
    return {
      prevPath: prevPackage,
      currentPath: currentPackage,
    };

    // Missing package paths
  } else if (prevPackage || currentPackage) {
    throw new CliError(
      "Please provide both `--current-package` and `--prev-package` when using package paths."
    );

    // Missing options
  } else {
    throw new CliError("Please check how to use this command.");
  }
}

export function getListImportsCliArgs({ path, verbose, json }): ListCLIArgs {
  // Missing properties
  if (!path) {
    throw new CliError("Please check how to use this command.");
  }

  return { path, isVerbose: verbose, isJson: json };
}
