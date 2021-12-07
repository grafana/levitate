import React, { PureComponent } from 'react';
export interface Props {
    /**
     *  Callback to trigger when clicking outside of current element occurs.
     */
    onClick: () => void;
    /**
     *  Runs the 'onClick' function when pressing a key outside of the current element. Defaults to true.
     */
    includeButtonPress: boolean;
    /** Object to attach the click event listener to. */
    parent: Window | Document;
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. Defaults to false.
     */
    useCapture?: boolean;
}
interface State {
    hasEventListener: boolean;
}
export declare class ClickOutsideWrapper extends PureComponent<Props, State> {
    static defaultProps: {
        includeButtonPress: boolean;
        parent: Window & typeof globalThis;
        useCapture: boolean;
    };
    myRef: React.RefObject<HTMLDivElement>;
    state: {
        hasEventListener: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onOutsideClick: (event: any) => void;
    render(): JSX.Element;
}
export {};
