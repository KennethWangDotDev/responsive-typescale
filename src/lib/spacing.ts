import { MediaBreakpoints } from './media';
import { TypeScaleBreakpoints } from './typescale';

type Direction = 'top' | 'bottom' | 'left' | 'right';
type SpacingType = 'margin' | 'padding';

const spacingFunction = (
    spacingType: SpacingType,
    direction: Direction,
    rhythmUnits: number,
    typescaleBreakpoints: TypeScaleBreakpoints,
    mediaBreakpoints: MediaBreakpoints
) => {
    let spacingCss = '';
    Object.entries(typescaleBreakpoints).forEach(([breakpointKey, typescale]) => {
        const rule = `${spacingType}-${direction}: ${typescale[0] * rhythmUnits}rem;\n`;
        if (breakpointKey === 'default') {
            spacingCss += rule;
        } else {
            spacingCss += `${mediaBreakpoints[breakpointKey](rule)}\n`;
        }
    });
    return spacingCss;
};

const generateSpacingMixins = (typescaleBreakpoints: TypeScaleBreakpoints, mediaBreakpoints: MediaBreakpoints) => {
    const margin = (direction: Direction, rhythmUnits: number) => {
        return spacingFunction('margin', direction, rhythmUnits, typescaleBreakpoints, mediaBreakpoints);
    };
    const padding = (direction: Direction, rhythmUnits: number) => {
        return spacingFunction('padding', direction, rhythmUnits, typescaleBreakpoints, mediaBreakpoints);
    };
    return [margin, padding];
};

export { generateSpacingMixins };
