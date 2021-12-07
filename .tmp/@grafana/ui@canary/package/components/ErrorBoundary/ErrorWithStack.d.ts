import { FunctionComponent } from 'react';
import { ErrorBoundaryApi } from './ErrorBoundary';
export interface Props extends ErrorBoundaryApi {
    title: string;
}
export declare const ErrorWithStack: FunctionComponent<Props>;
