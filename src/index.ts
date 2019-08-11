import { sensibleDefaultBreakpoints } from './lib/breakpoints';
import { generateMediaBreakpoints } from './lib/media';
import { generateTypescale } from './lib/typescale';
import { generateSizeMixin } from './lib/size';
import { generateSpacingMixins } from './lib/spacing';

const responsiveTypescaleLib = (breakpoints = sensibleDefaultBreakpoints) => {
    const media = generateMediaBreakpoints(breakpoints);
    const typescale = generateTypescale(breakpoints);
    const size = generateSizeMixin(typescale, media);
    const [margin, padding] = generateSpacingMixins(typescale, media);
    return {
        media,
        size,
        margin,
        padding
    };
};

export default responsiveTypescaleLib;
