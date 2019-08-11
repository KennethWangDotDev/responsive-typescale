import test from 'ava';
import { generateTypescale } from '../lib/typescale';
import { testBreakpoint } from './test-breakpoint';

test('generates typescale correctly', t => {
    const typescale = generateTypescale(testBreakpoint);
    t.deepEqual(typescale.default, {
        0: 1.15,
        1: 1.38,
        2: 1.656,
        3: 1.987,
        4: 2.385,
        5: 2.862,
        6: 3.434,
        7: 4.121,
        h1: 3.434,
        h2: 2.862,
        h3: 2.385,
        h4: 1.987,
        h5: 1.656,
        h6: 1.38,
        hero: 4.121,
        p: 1.15
    });
    t.deepEqual(typescale.large, {
        0: 1.125,
        1: 1.322,
        2: 1.553,
        3: 1.825,
        4: 2.144,
        5: 2.52,
        6: 2.961,
        7: 3.479,
        h1: 2.961,
        h2: 2.52,
        h3: 2.144,
        h4: 1.825,
        h5: 1.553,
        h6: 1.322,
        hero: 3.479,
        p: 1.125
    });
});
