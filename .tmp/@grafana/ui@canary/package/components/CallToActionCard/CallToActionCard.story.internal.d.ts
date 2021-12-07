import { CallToActionCardProps } from './CallToActionCard';
import { Story, Meta } from '@storybook/react';
declare const _default: Meta<import("@storybook/react").Args>;
export default _default;
interface StoryProps extends Partial<CallToActionCardProps> {
    Element: string;
    H1Text: string;
    buttonText: string;
}
export declare const Basic: Story<StoryProps>;
