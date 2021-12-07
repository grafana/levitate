import React from 'react';
/**
 * Given react node or function returns element accordingly
 *
 * @param itemToRender
 * @param props props to be passed to the function if item provided as such
 */
export declare function renderOrCallToRender<TProps = any>(itemToRender: ((props?: TProps) => React.ReactNode) | React.ReactNode, props?: TProps): React.ReactNode;
