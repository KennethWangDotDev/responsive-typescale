import dedent from 'dedent';
import { Breakpoints } from './breakpoints';

interface MediaBreakpoints {
    readonly [breakpoint: string]: (css: string) => string;
}

const generateMediaBreakpoints = (breakpoints: Breakpoints): MediaBreakpoints => {
    const media: any = {};
    Object.entries(breakpoints).forEach(([breakpointKey, breakpointValue]) => {
        if (breakpointValue.width) {
            const emSize = breakpointValue.width / 16;
            media[breakpointKey] = (css: string) => dedent`
                @media (max-width: ${emSize}em) {
                    ${css.trim()}
                }`;
        }
    });
    return media;
};

export { MediaBreakpoints, generateMediaBreakpoints };
