import path from "path";
import fg from "fast-glob";
import { getImportsInfo } from "./utils.compiler.imports";
import { PluginImportInfo } from "./types";
import { pathExists } from "./utils.file";
import { getNpmDependencies } from "./utils.npm";
import {
  getRepoNameFromUrl,
  initBaseCacheDir,
  cloneRepository,
  getRepoCacheDir,
  getSanitizedRepoUrl,
} from "./utils.git";
import { getPackageJson } from ".";

type Gobble = {
  repository: string;
  filters: string[];
  cacheDir: string;
  jsonlines: any;
};

export async function gobble({ repository, filters, cacheDir, jsonlines }: Gobble) {
  const repoName = getRepoNameFromUrl(repository);
  const repoCacheDir = getRepoCacheDir(repoName, cacheDir);
  const packageJson = getPackageJson(repoCacheDir);

  initBaseCacheDir(cacheDir);
  cloneRepository(repository, cacheDir);

  const filtersHaveMatch = Object.keys(getNpmDependencies(repoCacheDir)).some((dep) => filters.includes(dep));

  if (!filtersHaveMatch) {
    if (!jsonlines) {
      console.warn(`no dependencies match filters... skipping repo: ${repoName} `);
    }
    return [];
  }

  const modules = await fg([`${repoCacheDir}**/src/**/module.{js,ts}`], { absolute: true });
  const results: PluginImportInfo[] = [];
  for (const modulePath of modules) {
    const pluginJsonPath = path.join(path.dirname(modulePath), "plugin.json");
    const hasPluginJsonFile = pathExists(pluginJsonPath);

    if (!hasPluginJsonFile) {
      continue;
    }
    const pluginInfo = require(pluginJsonPath);
    const { imports } = getImportsInfo(modulePath, filters);
    const pluginImportInfo = imports.map<PluginImportInfo>((pluginImport) => ({
      ...pluginImport,
      pluginId: pluginInfo.id,
      pluginVersion: packageJson.version,
      pluginType: pluginInfo.type,
      pluginName: pluginInfo.name,
      repository: getSanitizedRepoUrl(repository),
    }));
    results.push(...pluginImportInfo);
  }
  return results;
}
