import React, { ReactElement } from 'react';
/** Returns the ID value of the first, and only, child element  */
export declare function getChildId(children: ReactElement): string | undefined;
/**
 * Given react node or function returns element accordingly
 *
 * @param itemToRender
 * @param props props to be passed to the function if item provided as such
 */
export declare function renderOrCallToRender<TProps = any>(itemToRender: ((props?: TProps) => React.ReactNode) | React.ReactNode, props?: TProps): React.ReactNode;
