import Prism from 'prismjs';
import { Plugin } from '@grafana/slate-react';
import { OptionsFormat } from './options';
export interface Token {
    content: string;
    offsets?: {
        start: number;
        end: number;
    };
    types: string[];
    aliases: string[];
    prev?: Token | null;
    next?: Token | null;
}
/**
 * A Slate plugin to highlight code syntax.
 */
export declare function SlatePrism(optsParam?: OptionsFormat, prismLanguages?: Prism.LanguageMap): Plugin;
export declare function flattenTokens(token: string | Prism.Token | Array<string | Prism.Token>): Token[];
