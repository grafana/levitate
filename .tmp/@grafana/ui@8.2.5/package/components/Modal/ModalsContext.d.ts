import React from 'react';
interface ModalsContextState {
    component: React.ComponentType<any> | null;
    props: any;
    showModal: <T>(component: React.ComponentType<T>, props: T) => void;
    hideModal: () => void;
}
interface ModalsProviderProps {
    children: React.ReactNode;
    /** Set default component to render as modal. Useful when rendering modals from Angular */
    component?: React.ComponentType<any> | null;
    /** Set default component props. Useful when rendering modals from Angular */
    props?: any;
}
export declare class ModalsProvider extends React.Component<ModalsProviderProps, ModalsContextState> {
    constructor(props: ModalsProviderProps);
    showModal: (component: React.ComponentType<any>, props: any) => void;
    hideModal: () => void;
    render(): JSX.Element;
}
export declare const ModalRoot: () => JSX.Element;
export declare const ModalsController: React.Consumer<ModalsContextState>;
export {};
