import fs from 'fs';
import { getNpmPackageDetails } from '.';

export function pathExists(path: string): Promise<boolean> {
  return new Promise((resolve) => {
    fs.access(path, fs.constants.R_OK, (err) => {
      resolve(!err);
    });
  });
}

export function isValidGrafanaVersion(version: string): boolean {
  return version === 'latest' || version === 'canary' || version.match(/\d\.\d\.\d(-.*)?$/) !== null;
}

export async function resolveGrafanaVersion(version: string): Promise<string | void> {
  if (!isValidGrafanaVersion(version)) {
    return;
  }
  const details = await getNpmPackageDetails('@grafana/data', version);
  if (details && details.version !== '') {
    return details.version;
  }
  return;
}
