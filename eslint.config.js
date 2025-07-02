// Use `npx eslint --inspect-config` when editing this file.

import gitignore from 'eslint-config-flat-gitignore';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import grafanaConfig from '@grafana/eslint-config/flat.js';

const gitignoreConfig = gitignore({
  root: true,
});
gitignoreConfig.ignores = [...gitignoreConfig.ignores, '**/fixtures', '.yarn/releases'];

export default [
  gitignoreConfig,
  { files: ['**/*.{ts,tsx,js,jsx}'] },
  ...grafanaConfig,
  {
    plugins: {
      'no-only-tests': noOnlyTests,
    },
    rules: {
      'no-only-tests/no-only-tests': 'error',
      '@typescript-eslint/type-annotation-spacing': 0,
    },
  },
];
