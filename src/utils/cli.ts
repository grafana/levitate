import { ListCLIArgs } from '../types.js';

export class CliError extends Error {}

// Can be used for validating CLI arguments in a more semantic way
export function getListImportsCliArgs({ path, verbose, json, filters }): ListCLIArgs {
  // Missing properties
  if (!path) {
    throw new CliError('Please check how to use this command.');
  }

  return { path, isVerbose: verbose, isJson: json, filters };
}
