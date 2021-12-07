import React from 'react';
import { Mark, Node, Decoration } from 'slate';
import { Editor } from '@grafana/slate-react';
import { Record } from 'immutable';
export interface OptionsFormat {
    onlyIn?: (node: Node) => boolean;
    getSyntax?: (node: Node) => string;
    renderMark?: ({ mark, children }: {
        mark: Mark;
        children: React.ReactNode;
    }) => void | React.ReactNode;
}
declare const Options_base: Record.Class;
/**
 * The plugin options
 */
declare class Options extends Options_base implements OptionsFormat {
    readonly onlyIn: (node: Node) => boolean;
    readonly getSyntax: (node: Node) => string;
    readonly renderDecoration: ({ decoration, children, }: {
        decoration: Decoration;
        children: React.ReactNode;
    }, editor: Editor, next: () => any) => void | React.ReactNode;
    constructor(props: OptionsFormat);
}
export default Options;
