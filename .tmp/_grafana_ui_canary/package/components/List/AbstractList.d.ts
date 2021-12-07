import React from 'react';
export interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => JSX.Element;
    getItemKey?: (item: T) => string;
    className?: string;
}
interface AbstractListProps<T> extends ListProps<T> {
    inline?: boolean;
}
export declare class AbstractList<T> extends React.PureComponent<AbstractListProps<T>> {
    constructor(props: AbstractListProps<T>);
    render(): JSX.Element;
}
export {};
