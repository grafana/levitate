import React from 'react';
export interface SpectrumPaletteProps {
    color: string;
    onChange: (color: string) => void;
}
declare const SpectrumPalette: React.FunctionComponent<SpectrumPaletteProps>;
export default SpectrumPalette;
