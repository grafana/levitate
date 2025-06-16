import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    globals: true,
    forceRerunTriggers: ['**/fixtures/**/*'],
    setupFiles: ['src/tests/setup-matchers.ts'],
  },
});
