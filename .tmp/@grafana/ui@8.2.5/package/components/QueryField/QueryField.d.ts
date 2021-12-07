import React, { Context } from 'react';
import { Value, Editor as CoreEditor } from 'slate';
import { Editor, Plugin } from '@grafana/slate-react';
import { CompletionItemGroup, TypeaheadOutput, TypeaheadInput, SuggestionsState } from '../..';
export interface QueryFieldProps {
    additionalPlugins?: Plugin[];
    cleanText?: (text: string) => string;
    disabled?: boolean;
    query?: string | null;
    onRunQuery?: () => void;
    onBlur?: () => void;
    onChange?: (value: string) => void;
    onRichValueChange?: (value: Value) => void;
    onClick?: (event: Event, editor: CoreEditor, next: () => any) => any;
    onTypeahead?: (typeahead: TypeaheadInput) => Promise<TypeaheadOutput>;
    onWillApplySuggestion?: (suggestion: string, state: SuggestionsState) => string;
    placeholder?: string;
    portalOrigin: string;
    syntax?: string;
    syntaxLoaded?: boolean;
}
export interface QueryFieldState {
    suggestions: CompletionItemGroup[];
    typeaheadContext: string | null;
    typeaheadPrefix: string;
    typeaheadText: string;
    value: Value;
}
/**
 * Renders an editor field.
 * Pass initial value as initialQuery and listen to changes in props.onValueChanged.
 * This component can only process strings. Internally it uses Slate Value.
 * Implement props.onTypeahead to use suggestions, see PromQueryField.tsx as an example.
 */
export declare class QueryField extends React.PureComponent<QueryFieldProps, QueryFieldState> {
    plugins: Plugin[];
    runOnChangeDebounced: Function;
    lastExecutedValue: Value | null;
    mounted: boolean;
    editor: Editor | null;
    constructor(props: QueryFieldProps, context: Context<any>);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: QueryFieldProps, prevState: QueryFieldState): void;
    /**
     * Update local state, propagate change upstream and optionally run the query afterwards.
     */
    onChange: (value: Value, runQuery?: boolean | undefined) => void;
    runOnChange: () => void;
    runOnRunQuery: () => void;
    runOnChangeAndRunQuery: () => void;
    /**
     * We need to handle blur events here mainly because of dashboard panels which expect to have query executed on blur.
     */
    handleBlur: (event: Event, editor: CoreEditor, next: Function) => any;
    cleanText(text: string): string;
    render(): JSX.Element;
}
export default QueryField;
