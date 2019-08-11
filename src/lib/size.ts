import { MediaBreakpoints } from './media';
import { ScaleLevel, TypeScaleBreakpoints } from './typescale';

const sizeFunction = (
    scaleLevel: ScaleLevel,
    typescaleBreakpoints: TypeScaleBreakpoints,
    mediaBreakpoints: MediaBreakpoints
): string => {
    let sizeCss = '';
    Object.entries(typescaleBreakpoints).forEach(([breakpointKey, typescale]) => {
        const rule = `${`font-size: ${typescale[scaleLevel]}rem;`}\n`;
        if (breakpointKey === 'default') {
            sizeCss += rule;
        } else {
            sizeCss += `${mediaBreakpoints[breakpointKey](rule)}\n`;
        }
    });
    return sizeCss;
};

const generateSizeMixin = (typescaleBreakpoints: TypeScaleBreakpoints, mediaBreakpoints: MediaBreakpoints) => {
    return (scaleLevel: ScaleLevel) => sizeFunction(scaleLevel, typescaleBreakpoints, mediaBreakpoints);
};

export { generateSizeMixin };
