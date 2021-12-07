import React, { HTMLAttributes } from 'react';
import { PluginSignatureStatus } from '@grafana/data';
/**
 * @public
 */
export interface PluginSignatureBadgeProps extends HTMLAttributes<HTMLDivElement> {
    status?: PluginSignatureStatus;
}
/**
 * @public
 */
export declare const PluginSignatureBadge: React.FC<PluginSignatureBadgeProps>;
