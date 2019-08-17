import { MediaBreakpoints } from './media';
import { TypeScaleBreakpoints } from './typescale';
import { Breakpoints } from './breakpoints';

const sizeFunction = (
    scaleLevel: number,
    rhythmUnits: number,
    breakpoints: Breakpoints,
    typescaleBreakpoints: TypeScaleBreakpoints,
    mediaBreakpoints: MediaBreakpoints
): string => {
    let sizeCss = '';
    Object.entries(typescaleBreakpoints).forEach(([breakpointKey, typescale]) => {
        // Generate CSS Rule
        let rule = `${`font-size: ${typescale(scaleLevel)}rem;`}\n`;
        if (rhythmUnits > 0) {
            rule += `line-height: ${(
                breakpoints[breakpointKey].lineHeight *
                breakpoints[breakpointKey].base *
                rhythmUnits
            ).toFixed(4)}rem;\n`;
        }
        // Generate responsive CSS
        if (breakpointKey === 'default') {
            sizeCss += rule;
        } else {
            sizeCss += `${mediaBreakpoints[breakpointKey](rule)}\n`;
        }
    });
    return sizeCss;
};

const generateSizeMixin = (
    breakpoints: Breakpoints,
    typescaleBreakpoints: TypeScaleBreakpoints,
    mediaBreakpoints: MediaBreakpoints
) => {
    return (scaleLevel: number, rhythmUnits: number = 0) =>
        sizeFunction(scaleLevel, rhythmUnits, breakpoints, typescaleBreakpoints, mediaBreakpoints);
};

export { generateSizeMixin };
