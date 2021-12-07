import React from 'react';
import type * as monacoType from 'monaco-editor/esm/vs/editor/editor.api';
declare const _default: React.FunctionComponent<{
    value: string;
    onBlur?: import("./types").CodeEditorChangeHandler | undefined;
    readOnly?: boolean | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    language: string;
    showMiniMap?: boolean | undefined;
    showLineNumbers?: boolean | undefined;
    monacoOptions?: monacoType.editor.IStandaloneEditorConstructionOptions | undefined;
    onBeforeEditorMount?: ((monaco: typeof monacoType) => void) | undefined;
    onEditorDidMount?: ((editor: monacoType.editor.IStandaloneCodeEditor, monaco: typeof monacoType) => void) | undefined;
    onSave?: import("./types").CodeEditorChangeHandler | undefined;
    getSuggestions?: import("./types").CodeEditorSuggestionProvider | undefined;
}>;
export default _default;
