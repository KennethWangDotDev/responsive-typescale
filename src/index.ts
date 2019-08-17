import { sensibleDefaultBreakpoints } from './lib/breakpoints';
import { generateMediaBreakpoints } from './lib/media';
import { generateTypescale } from './lib/typescale';
import { generateSizeMixin } from './lib/size';
import { generateSpacingMixins } from './lib/spacing';

const initTypescale = (breakpoints = sensibleDefaultBreakpoints) => {
    const media = generateMediaBreakpoints(breakpoints);
    const typescale = generateTypescale(breakpoints);
    const size = generateSizeMixin(breakpoints, typescale, media);
    const [margin, padding] = generateSpacingMixins(breakpoints, media);
    return {
        media,
        size,
        margin,
        padding
    };
};

export default initTypescale;
