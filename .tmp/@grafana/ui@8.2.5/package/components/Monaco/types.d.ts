import type * as monacoType from 'monaco-editor/esm/vs/editor/editor.api';
export declare type CodeEditorChangeHandler = (value: string) => void;
export declare type CodeEditorSuggestionProvider = () => CodeEditorSuggestionItem[];
export type { monacoType as monacoTypes };
export declare type Monaco = typeof monacoType;
export declare type MonacoEditor = monacoType.editor.IStandaloneCodeEditor;
export declare type MonacoOptions = monacoType.editor.IStandaloneEditorConstructionOptions;
export interface CodeEditorProps {
    value: string;
    language: string;
    width?: number | string;
    height?: number | string;
    readOnly?: boolean;
    showMiniMap?: boolean;
    showLineNumbers?: boolean;
    monacoOptions?: MonacoOptions;
    /**
     * Callback before the editor has mounted that gives you raw access to monaco
     */
    onBeforeEditorMount?: (monaco: Monaco) => void;
    /**
     * Callback after the editor has mounted that gives you raw access to monaco
     */
    onEditorDidMount?: (editor: MonacoEditor, monaco: Monaco) => void;
    /** Handler to be performed when editor is blurred */
    onBlur?: CodeEditorChangeHandler;
    /** Handler to be performed when Cmd/Ctrl+S is pressed */
    onSave?: CodeEditorChangeHandler;
    /**
     * Language agnostic suggestion completions -- typically for template variables
     */
    getSuggestions?: CodeEditorSuggestionProvider;
}
/**
 * @alpha
 */
export declare enum CodeEditorSuggestionItemKind {
    Method = "method",
    Field = "field",
    Property = "property",
    Constant = "constant",
    Text = "text"
}
/**
 * @alpha
 */
export interface CodeEditorSuggestionItem {
    /**
     * The label of this completion item. By default
     * this is also the text that is inserted when selecting
     * this completion.
     */
    label: string;
    /**
     * The kind of this completion item. An icon is chosen
     * by the editor based on the kind.
     */
    kind?: CodeEditorSuggestionItemKind;
    /**
     * A human-readable string with additional information
     * about this item, like type or symbol information.
     */
    detail?: string;
    /**
     * A human-readable string that represents a doc-comment.
     */
    documentation?: string;
    /**
     * A string or snippet that should be inserted in a document when selecting
     * this completion. When `falsy` the `label` is used.
     */
    insertText?: string;
}