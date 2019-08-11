interface Breakpoint {
    readonly width?: number;
    readonly base: number;
    readonly ratio: number;
    readonly lineHeight: number;
}
interface Breakpoints {
    readonly default: Breakpoint;
    readonly [breakpointName: string]: Breakpoint;
}

const sensibleDefaultBreakpoints: Breakpoints = {
    default: {
        base: 1.15,
        ratio: 1.2,
        lineHeight: 1.4
    },
    extraLarge: {
        width: 1440,
        base: 1.15,
        ratio: 1.175,
        lineHeight: 1.4
    },
    large: {
        width: 1080,
        base: 1.125,
        ratio: 1.175,
        lineHeight: 1.35
    },
    medium: {
        width: 720,
        base: 1.1,
        ratio: 1.15,
        lineHeight: 1.3
    },
    small: {
        width: 480,
        base: 1,
        ratio: 1.1,
        lineHeight: 1.3
    }
};

export { sensibleDefaultBreakpoints, Breakpoint, Breakpoints };
