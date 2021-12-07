import React from 'react';
import { IconName } from '../../types';
interface Props {
    title: string;
    /** @deprecated */
    icon?: IconName;
    /** @deprecated */
    iconTooltip?: string;
}
/** @internal */
export declare const ModalHeader: React.FC<Props>;
export {};
