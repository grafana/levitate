import React from 'react';
import type * as monacoType from 'monaco-editor/esm/vs/editor/editor.api';
export declare const CodeEditor: React.FunctionComponent<{
    value: string;
    onBlur?: import("./types").CodeEditorChangeHandler | undefined;
    readOnly?: boolean | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    language: string;
    showMiniMap?: boolean | undefined;
    showLineNumbers?: boolean | undefined;
    monacoOptions?: import("./types").MonacoOptionsWithGrafanaDefaults | undefined;
    onBeforeEditorMount?: ((monaco: typeof monacoType) => void) | undefined;
    onEditorDidMount?: ((editor: monacoType.editor.IStandaloneCodeEditor, monaco: typeof monacoType) => void) | undefined;
    onSave?: import("./types").CodeEditorChangeHandler | undefined;
    getSuggestions?: import("./types").CodeEditorSuggestionProvider | undefined;
}>;
