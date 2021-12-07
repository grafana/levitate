import React, { PureComponent, ReactNode, ComponentType } from 'react';
export interface ErrorInfo {
    componentStack: string;
}
export interface ErrorBoundaryApi {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}
interface Props {
    children: (r: ErrorBoundaryApi) => ReactNode;
    /** Will re-render children after error if recover values changes */
    dependencies?: any[];
    /** Callback called on error */
    onError?: (error: Error) => void;
    /** Callback error state is cleared due to recover props change */
    onRecover?: () => void;
}
interface State {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}
export declare class ErrorBoundary extends PureComponent<Props, State> {
    readonly state: State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    componentDidUpdate(prevProps: Props): void;
    render(): React.ReactNode;
}
/**
 * Props for the ErrorBoundaryAlert component
 *
 * @public
 */
export interface ErrorBoundaryAlertProps {
    /** Title for the error boundary alert */
    title?: string;
    /** Component to be wrapped with an error boundary */
    children: ReactNode;
    /** 'page' will render full page error with stacktrace. 'alertbox' will render an <Alert />. Default 'alertbox' */
    style?: 'page' | 'alertbox';
    /** Will re-render children after error if recover values changes */
    dependencies?: any[];
}
export declare class ErrorBoundaryAlert extends PureComponent<ErrorBoundaryAlertProps> {
    static defaultProps: Partial<ErrorBoundaryAlertProps>;
    render(): JSX.Element;
}
/**
 * HOC for wrapping a component in an error boundary.
 *
 * @param Component - the react component to wrap in error boundary
 * @param errorBoundaryProps - error boundary options
 *
 * @public
 */
export declare function withErrorBoundary<P = {}>(Component: ComponentType<P>, errorBoundaryProps?: Omit<ErrorBoundaryAlertProps, 'children'>): ComponentType<P>;
export {};
