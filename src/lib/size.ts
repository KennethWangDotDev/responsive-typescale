import { MediaBreakpoints } from './media';
import { SizeTypes, TypeScaleBreakpoints } from './typescale';

const sizeFunction = (
    sizeType: SizeTypes,
    typescaleBreakpoints: TypeScaleBreakpoints,
    mediaBreakpoints: MediaBreakpoints
): string => {
    let sizeCss = '';
    Object.entries(typescaleBreakpoints).forEach(([breakpointKey, typescale]) => {
        const rule = `${`font-size: ${typescale[sizeType]}rem;`}\n`;
        if (breakpointKey === 'default') {
            sizeCss += rule;
        } else {
            sizeCss += `${mediaBreakpoints[breakpointKey](rule)}\n`;
        }
    });
    return sizeCss;
};

const generateSizeMixin = (typescaleBreakpoints: TypeScaleBreakpoints, mediaBreakpoints: MediaBreakpoints) => {
    return (sizeType: SizeTypes) => sizeFunction(sizeType, typescaleBreakpoints, mediaBreakpoints);
};

export { generateSizeMixin };
