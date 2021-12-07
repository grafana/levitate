/// <reference types="react" />
import { GrafanaTheme2, ThemeRichColor } from '@grafana/data';
export declare const ThemeDemo: () => JSX.Element;
interface RichColorDemoProps {
    theme: GrafanaTheme2;
    color: ThemeRichColor;
}
export declare function RichColorDemo({ theme, color }: RichColorDemoProps): JSX.Element;
export declare function TextColors({ t }: {
    t: GrafanaTheme2;
}): JSX.Element;
export declare function ShadowDemo({ name, shadow }: {
    name: string;
    shadow: string;
}): JSX.Element;
export declare function ActionsDemo(): JSX.Element;
export {};
