import fs from "fs";
import { SimpleGit } from "simple-git";

export function pathExists(path: string): Promise<boolean> {
  return new Promise((resolve) => {
    fs.access(path, fs.constants.R_OK, (err) => {
      resolve(!err);
    });
  });
}

export async function updateRepository(git: SimpleGit, repoDir: string) {
  try {
    await git.cwd({ path: repoDir, root: true });
    return await git.pull();
  } catch (error) {
    console.log(error);
  }
}
export async function cloneRepository(git: SimpleGit, repository: string, repoName: string) {
  try {
    return await git.clone(repository, repoName);
  } catch (error) {
    console.log(error);
  }
}
