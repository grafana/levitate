import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export async function run(
  cmd: string,
  args: string[],
  options: { cwd?: string } = {}
): Promise<{ stdout: string; stderr: string }> {
  const { stdout, stderr } = await execFileAsync(cmd, args, {
    cwd: options.cwd,
    encoding: 'utf8',
    maxBuffer: 50 * 1024 * 1024,
  });
  return { stdout: stdout.trim(), stderr };
}
