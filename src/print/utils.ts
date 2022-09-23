import chalk from 'chalk';

// 🥃
export function printRedLabel(text: string) {
  console.log(chalk.bgRed.bold.white(` ${text} `));
}

export function printHeading(text: string, description?: string) {
  console.log(chalk.bold(`  ${text}`));

  if (description) {
    console.log(chalk.gray(description));
  }
}

export function printSpacing(count?: number) {
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      console.log('');
    }
  } else {
    console.log('');
  }
}
