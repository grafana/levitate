type TestProps = {
  foo: string;
  bar: string[];
};
// export function TestComponent3({ foo, bar }: TestProps) {}

export class TestComponent<TestProps> {}

// export function TestComponent2<TestProps>() {}
//
export function TestComponent3({ foo, bar }: TestProps) {}
