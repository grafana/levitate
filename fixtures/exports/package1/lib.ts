function test1() {}

export function test() {
  return test1;
}

export type test2 = typeof test1;

export interface Test3 {
  test: test2;
}
