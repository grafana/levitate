import type * as monacoType from 'monaco-editor/esm/vs/editor/editor.api';
import { CodeEditorSuggestionProvider, Monaco } from './types';
/**
 * @internal -- only exported for tests
 */
export declare function findInsertIndex(line: string): {
    index: number;
    prefix: string;
};
/**
 * @alpha
 */
export declare function registerSuggestions(monaco: Monaco, language: string, getSuggestions: CodeEditorSuggestionProvider): monacoType.IDisposable | undefined;
