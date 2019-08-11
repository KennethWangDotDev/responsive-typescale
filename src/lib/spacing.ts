import { MediaBreakpoints } from './media';
import { TypeScaleBreakpoints } from './typescale';

type Direction = 'top' | 'bottom' | 'left' | 'right';
type SpacingType = 'margin' | 'padding';

const spacingFunction = (
    spacingType: SpacingType,
    direction: Direction,
    rhythmAmount: number,
    typescaleBreakpoints: TypeScaleBreakpoints,
    mediaBreakpoints: MediaBreakpoints
) => {
    let spacingCss = '';
    Object.entries(typescaleBreakpoints).forEach(([breakpointKey, typescale]) => {
        const rule = `${spacingType}-${direction}: ${typescale[0] * rhythmAmount}rem;\n`;
        if (breakpointKey === 'default') {
            spacingCss += rule;
        } else {
            spacingCss += `${mediaBreakpoints[breakpointKey](rule)}\n`;
        }
    });
    return spacingCss;
};

const generateSpacingMixins = (typescaleBreakpoints: TypeScaleBreakpoints, mediaBreakpoints: MediaBreakpoints) => {
    const margin = (direction: Direction, rhythmAmount: number) => {
        return spacingFunction('margin', direction, rhythmAmount, typescaleBreakpoints, mediaBreakpoints);
    };
    const padding = (direction: Direction, rhythmAmount: number) => {
        return spacingFunction('padding', direction, rhythmAmount, typescaleBreakpoints, mediaBreakpoints);
    };
    return [margin, padding];
};

export { generateSpacingMixins };
