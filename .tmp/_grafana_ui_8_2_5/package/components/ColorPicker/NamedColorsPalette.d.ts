/// <reference types="react" />
export interface NamedColorsPaletteProps {
    color?: string;
    onChange: (colorName: string) => void;
}
export declare const NamedColorsPalette: ({ color, onChange }: NamedColorsPaletteProps) => JSX.Element;
