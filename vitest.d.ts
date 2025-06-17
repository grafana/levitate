import 'vitest';
// Custom matcher types are defined in src/tests/setup-matchers.ts

interface CustomMatchers<R = unknown> {
  toHaveTypeChanges: (num?: number) => R;
  toHaveTypeRemovals: (num?: number) => R;
  toHaveTypeAdditions: (num?: number) => R;
}

declare module 'vitest' {
  interface Matchers<T = any> extends CustomMatchers<T> {}
}
