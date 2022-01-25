import fs from "fs";
import path from "path";
import { homedir } from "os";
import simpleGit, { SimpleGit } from "simple-git";
import { logError } from "./utils.log";
import { pathExists } from "./utils.file";

export async function updateRepository(git: SimpleGit, repoDir: string) {
  try {
    await git.cwd({ path: repoDir, root: true });
    return await git.pull();
  } catch (error) {
    logError(error);
  }
}
export async function fetchRepository(git: SimpleGit, repository: string, repoName: string) {
  try {
    return await git.clone(repository, repoName);
  } catch (error) {
    logError(error);
  }
}

export function getSanitizedRepoUrl(url: string): string {
  return url.replace(/\/$/, "");
}

export function getRepoNameFromUrl(url: string): string {
  const santitisedRepoUrl = getSanitizedRepoUrl(url);

  return santitisedRepoUrl.split("/")[santitisedRepoUrl.split("/").length - 1];
}

export function getBaseCacheDir(cacheDir?: string) {
  return cacheDir ? cacheDir : path.resolve(process.cwd(), homedir(), ".levitate-cache");
}

export function getRepoCacheDir(repoName: string, cacheDir?: string) {
  return path.join(getBaseCacheDir(cacheDir), repoName);
}

export function initBaseCacheDir(cacheDir?: string) {
  const baseCacheDir = getBaseCacheDir(cacheDir);

  if (!pathExists(baseCacheDir)) {
    fs.mkdirSync(baseCacheDir);
  }
}

// Clones a git repository into a cache directory or updates it if it was cloned already
export async function cloneRepository(url: string, cacheDir?: string) {
  const repoName = getRepoNameFromUrl(url);
  const baseCacheDir = getBaseCacheDir(cacheDir);
  const repoCacheDir = getRepoCacheDir(repoName, cacheDir);
  const isCloned = pathExists(path.join(repoCacheDir, ".git"));
  const git: SimpleGit = simpleGit({ baseDir: baseCacheDir });

  if (isCloned) {
    await updateRepository(git, repoCacheDir);
  } else {
    await fetchRepository(git, url, repoName);
  }
}
