import { join, resolve } from "path";
import { homedir } from "os";
import { existsSync, mkdirSync } from "fs";
import simpleGit, { SimpleGit } from "simple-git";
import fg from "fast-glob";
import { getImportsInfo, getGroupedImports } from "./utils.compiler.imports";

export async function gobble({ repository, filters, cacheDir }) {
  const repoName = repository.split("/")[repository.split("/").length - 1];
  const baseDir = cacheDir ? cacheDir : resolve(process.cwd(), homedir(), ".gobble-cache");
  const repoDir = join(baseDir, repoName);

  if (!existsSync(baseDir)) {
    mkdirSync(baseDir);
  }
  const isCloned = existsSync(join(repoDir, ".git"));
  const git: SimpleGit = simpleGit({ baseDir });

  if (isCloned) {
    await updateRepository(git, repoDir);
  } else {
    await cloneRepository(git, repository, repoName);
  }

  const packageJson = require(join(repoDir, "package.json"));
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  const filtersHaveMatch = Object.keys(dependencies).some((dep) => filters.includes(dep));

  if (filtersHaveMatch) {
    const modules = await fg([`${repoDir}**/src/**/module.{js,ts}`], { absolute: true });
    const results = modules.reduce((acc, modulePath) => {
      const { imports } = getImportsInfo(modulePath, filters);
      return [...acc, ...imports];
    }, []);
    const imports = getGroupedImports(results);
    return imports;
  } else {
    console.log(`no dependencies match filters... skipping repo: ${repoName} `);
    return [];
  }
}

async function updateRepository(git: SimpleGit, repoDir: string) {
  try {
    await git.cwd({ path: repoDir, root: true });
    return await git.pull();
  } catch (error) {
    console.log(error);
  }
}
async function cloneRepository(git: SimpleGit, repository: string, repoName: string) {
  try {
    return await git.clone(repository, repoName);
  } catch (error) {
    console.log(error);
  }
}
