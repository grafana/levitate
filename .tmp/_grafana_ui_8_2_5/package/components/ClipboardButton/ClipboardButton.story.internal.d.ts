import { Story, Meta } from '@storybook/react';
import { Props } from './ClipboardButton';
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
interface StoryProps extends Partial<Props> {
    inputText: string;
    buttonText: string;
}
export declare const CopyToClipboard: Story<StoryProps>;
