import path from "path";
import { homedir } from "os";
import fs from "fs";
import simpleGit, { SimpleGit } from "simple-git";
import fg from "fast-glob";
import { getImportsInfo } from "./utils.compiler.imports";
import { PluginImportInfo } from "./types";
import { pathExists, updateRepository, cloneRepository } from "./utils";

type Gobble = {
  repository: string;
  filters: string[];
  cacheDir: string;
  jsonlines: any;
};

export async function gobble({ repository, filters, cacheDir, jsonlines }: Gobble) {
  const santitisedRepoUrl = repository.replace(/\/$/, "");
  const repoName = santitisedRepoUrl.split("/")[santitisedRepoUrl.split("/").length - 1];
  const baseDir = cacheDir ? cacheDir : path.resolve(process.cwd(), homedir(), ".gobble-cache");
  const repoDir = path.join(baseDir, repoName);

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
  }
  const isCloned = fs.existsSync(path.join(repoDir, ".git"));
  const git: SimpleGit = simpleGit({ baseDir });

  if (isCloned) {
    await updateRepository(git, repoDir, jsonlines);
  } else {
    await cloneRepository(git, santitisedRepoUrl, repoName, jsonlines);
  }

  const packageJsonPath = path.join(repoDir, "package.json");
  const hasPackageJson = await pathExists(packageJsonPath);

  if (!hasPackageJson) {
    if (!jsonlines) {
      console.warn(`no package.json file found... skipping repo: ${repoName} `);
    }
    return [];
  }

  const packageJson = require(packageJsonPath);
  // const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  // const filtersHaveMatch = Object.keys(dependencies).some((dep) => filters.includes(dep));

  // if (!filtersHaveMatch) {
  //   if (!jsonlines) {
  //     console.warn(`no dependencies match filters... skipping repo: ${repoName} `);
  //   }
  //   return [];
  // }

  const modules = await fg([`${repoDir}**/src/**/module.{js,ts}`], { absolute: true });
  const results: PluginImportInfo[] = [];
  for (const modulePath of modules) {
    const pluginJsonPath = path.join(path.dirname(modulePath), "plugin.json");
    const hasPluginJsonFile = await pathExists(pluginJsonPath);

    if (!hasPluginJsonFile) {
      continue;
    }
    const pluginInfo = require(pluginJsonPath);
    const { imports } = getImportsInfo(modulePath, filters);
    const pluginImportInfo = {
      pluginId: pluginInfo.id,
      pluginVersion: packageJson.version,
      pluginType: pluginInfo.type,
      pluginName: pluginInfo.name,
      repository: santitisedRepoUrl,
      imports,
    };
    results.push(pluginImportInfo);
  }
  return results;
}
