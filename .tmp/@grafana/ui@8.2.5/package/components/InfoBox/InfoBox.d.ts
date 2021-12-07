import React from 'react';
import { AlertVariant } from '../Alert/Alert';
export interface InfoBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    children: React.ReactNode;
    /** Title of the box */
    title?: string | JSX.Element;
    /** Url of the read more link */
    url?: string;
    /** Text of the read more link */
    urlTitle?: string;
    /** Indicates whether or not box should be rendered with Grafana branding background */
    branded?: boolean;
    /** Color variant of the box */
    severity?: AlertVariant;
    /** Call back to be performed when box is dismissed */
    onDismiss?: () => void;
}
/** @deprecated use Alert with severity info */
export declare const InfoBox: React.MemoExoticComponent<React.ForwardRefExoticComponent<InfoBoxProps & React.RefAttributes<HTMLDivElement>>>;
