export * from './data';

export { default as mainInstance } from './data';

export function inlined() {
  return 'inlined';
}

export enum FooEnum {
  A = 'A',
  B = 'B',
  C = 'C',
}

export class FooClass {
  constructor(public foo: string) {}

  #privateField = 'privateFieldWithHash';
  private privateField = 'privateField';
  protected protectedField = 'protectedField';
  publicField = 'publicField';
  private privateOptionalField?;

  private privateMethod(): string {
    return 'private';
  }

  protected protectedMethod() {}

  method1(param1: string, param2: number) {
    return param1 + param2;
  }
  method2() {
    return this.foo;
  }

  static staticMethod() {
    return 'static';
  }

  static staticMethod2() {
    return 'static2';
  }
}

export class SubFooClass extends FooClass {
  constructor(public foo: string) {
    super(foo);
  }

  method1(param1: string, param2: number) {
    return super.method1(param1, param2);
  }

  subMethod() {
    return 'sub';
  }
}

export * from './lib';
