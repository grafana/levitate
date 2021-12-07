/** @jsxImportSource @emotion/react */
import { FC } from 'react';
export declare function EmotionPerfTest(): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const TestScenario: FC<{
    name: string;
    Component: FC<TestComponentProps>;
}>;
interface TestComponentProps {
    index: number;
}
export {};
