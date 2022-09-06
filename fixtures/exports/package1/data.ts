export enum data {
  test = 'test',
}

export function data2() {
  return data.test;
}

class Test {
  test() {
    return data.test;
  }
}

export default new Test();
