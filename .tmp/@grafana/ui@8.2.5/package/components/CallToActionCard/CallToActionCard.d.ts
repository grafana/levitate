import React from 'react';
export interface CallToActionCardProps {
    message?: string | JSX.Element;
    callToActionElement: JSX.Element;
    footer?: string | JSX.Element;
    className?: string;
}
export declare const CallToActionCard: React.FunctionComponent<CallToActionCardProps>;
