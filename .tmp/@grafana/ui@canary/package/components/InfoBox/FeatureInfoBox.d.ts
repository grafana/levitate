import React from 'react';
import { InfoBoxProps } from './InfoBox';
import { FeatureState } from '@grafana/data';
export interface FeatureInfoBoxProps extends Omit<InfoBoxProps, 'title' | 'urlTitle'> {
    title: string;
    featureState?: FeatureState;
}
/** @deprecated use Alert with severity info */
export declare const FeatureInfoBox: React.MemoExoticComponent<React.ForwardRefExoticComponent<FeatureInfoBoxProps & React.RefAttributes<HTMLDivElement>>>;
interface FeatureBadgeProps {
    featureState: FeatureState;
    tooltip?: string;
}
export declare const FeatureBadge: React.FC<FeatureBadgeProps>;
export {};
