type TestProps = {
  foo: string;
  bar: number[];
};

export class TestComponent<TestProps> {}

// export function TestComponent2<TestProps>() {}
//
export function TestComponent3({ foo, bar }: TestProps) {}
