import modularScaleLib, { modularScale } from 'modular-scale';
import { Breakpoints } from './breakpoints';

interface TypeScaleBreakpoints {
    readonly [breakpoint: string]: modularScale;
}

const generateTypescale = (breakpoints: Breakpoints): TypeScaleBreakpoints => {
    const typeScale: any = {};
    Object.entries(breakpoints).forEach(([breakpointKey, breakpointValue]) => {
        // Initialize typescale for iterated breakpoint
        typeScale[breakpointKey] = {};
        // Initialize modular scale
        const ms = modularScaleLib({
            ratio: breakpointValue.ratio,
            base: breakpointValue.base
        });
        typeScale[breakpointKey] = ms;
    });
    return typeScale;
};

export { TypeScaleBreakpoints, generateTypescale };
