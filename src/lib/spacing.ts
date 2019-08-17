import { MediaBreakpoints } from './media';
import { Breakpoints } from './breakpoints';

type Direction = 'top' | 'bottom' | 'left' | 'right';
type SpacingType = 'margin' | 'padding';

const spacingFunction = (
    spacingType: SpacingType,
    direction: Direction,
    rhythmUnits: number,
    breakpoint: Breakpoints,
    mediaBreakpoints: MediaBreakpoints
) => {
    let spacingCss = '';
    Object.entries(breakpoint).forEach(([breakpointKey, breakpointValue]) => {
        const rule = `${spacingType}-${direction}: ${breakpointValue.base * rhythmUnits}rem;\n`;
        if (breakpointKey === 'default') {
            spacingCss += rule;
        } else {
            spacingCss += `${mediaBreakpoints[breakpointKey](rule)}\n`;
        }
    });
    return spacingCss;
};

const generateSpacingMixins = (breakpoint: Breakpoints, mediaBreakpoints: MediaBreakpoints) => {
    const margin = (direction: Direction, rhythmUnits: number) => {
        return spacingFunction('margin', direction, rhythmUnits, breakpoint, mediaBreakpoints);
    };
    const padding = (direction: Direction, rhythmUnits: number) => {
        return spacingFunction('padding', direction, rhythmUnits, breakpoint, mediaBreakpoints);
    };
    return [margin, padding];
};

export { generateSpacingMixins };
