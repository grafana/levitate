import { execa } from 'execa';
import path from 'path';
import chalk from 'chalk';

const packages = ['@grafana/data', '@grafana/runtime', '@grafana/ui'];

const env = {
  LEVITATE_CACHE: '1',
};

async function main() {
  for (const pkg of packages) {
    console.log(chalk.yellow('Comparing exports for package: '), chalk.blue(pkg));
    try {
      console.log('Getting latest...');
      const { stdout: latestOutput } = await execa(
        'npx',
        ['--yes', '@grafana/levitate@latest', 'list-exports', '--path', pkg],
        {
          env,
        }
      );
      const latestList = extractList(latestOutput);

      console.log('Getting current...');
      const { stdout: currentOutput } = await execa(
        'node',
        [path.resolve(__dirname, '../dist/bin.js'), 'list-exports', '--path', pkg],
        {
          env,
        }
      );

      const currentList = extractList(currentOutput);

      const diff = findDifferences(latestList, currentList);
      console.log('Total in latest: ', latestList.length);
      console.log('Total in current: ', currentList.length);
      console.log('Extra in latest', diff.extraInA);
      console.log('Extra in current', diff.extraInB);
    } catch (error) {
      console.log('Could not process package', pkg);
      console.error(error);
    }
    console.log('\n');
  }
}

function extractList(stdout: string): string[] {
  const lines = stdout.split('\n');
  const final: string[] = [];
  for (const line of lines) {
    const trimmed = line.replace(/\s/g, '');
    if (trimmed.startsWith('-')) {
      final.push(trimmed.substring(1));
    }
  }
  return final;
}

function findDifferences(arrA: string[], arrB: string[]) {
  const extraInA = arrB.filter((b) => !arrA.includes(b));
  const extraInB = arrA.filter((a) => !arrB.includes(a));

  return {
    extraInA,
    extraInB,
  };
}

main();
