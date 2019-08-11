import modularScale from 'modular-scale';
import { Breakpoints } from './breakpoints';

type ScaleLevel = 'p' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' | 'hero' | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

type TypeScale = {
    [type in ScaleLevel]: number;
};

interface TypeScaleBreakpoints {
    readonly [breakpoint: string]: TypeScale;
}

const typescaleAlias = {
    [0]: 'p',
    [1]: 'h6',
    [2]: 'h5',
    [3]: 'h4',
    [4]: 'h3',
    [5]: 'h2',
    [6]: 'h1',
    [7]: 'hero'
};

const generateTypescale = (breakpoints: Breakpoints): TypeScaleBreakpoints => {
    const typeScale: any = {};
    Object.entries(breakpoints).forEach(([breakpointKey, breakpointValue]) => {
        // Initialize typescale for iterated breakpoint
        typeScale[breakpointKey] = {};
        // Initialize modular scale
        const ms = modularScale({
            ratio: breakpointValue.ratio,
            base: breakpointValue.base
        });
        // Fill typescale
        Object.entries(typescaleAlias).map(([numberKey, stringKey]) => {
            const modularValue = ms(Number(numberKey));
            typeScale[breakpointKey][numberKey] = modularValue;
            typeScale[breakpointKey][stringKey] = modularValue;
        });
    });
    return typeScale;
};

export { TypeScaleBreakpoints, ScaleLevel, generateTypescale };
