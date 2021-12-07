import { PureComponent } from 'react';
import Clipboard from 'clipboard';
import { ButtonProps } from '../Button';
export interface Props extends ButtonProps {
    /** A function that returns text to be copied */
    getText(): string;
    /** Callback when the text has been successfully copied */
    onClipboardCopy?(e: Clipboard.Event): void;
    /** Callback when there was an error copying the text */
    onClipboardError?(e: Clipboard.Event): void;
}
export declare class ClipboardButton extends PureComponent<Props> {
    private clipboard;
    private elem;
    setRef: (elem: HTMLButtonElement) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
