import React from 'react';
interface StateHolderProps<T> {
    logState?: boolean;
    initialState: T;
    children: (currentState: T, updateState: (nextState: T) => void) => React.ReactNode;
}
export declare class UseState<T> extends React.Component<StateHolderProps<T>, {
    value: T;
    initialState: T;
}> {
    constructor(props: StateHolderProps<T>);
    static getDerivedStateFromProps(props: StateHolderProps<{}>, state: {
        value: any;
        initialState: any;
    }): {
        value: any;
        initialState: any;
    };
    handleStateUpdate: (nextState: T) => void;
    render(): React.ReactNode;
}
export {};
