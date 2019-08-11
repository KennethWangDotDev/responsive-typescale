import test from 'ava';
import dedent from 'dedent';
import { testBreakpoint } from './test-breakpoint';
import { generateTypescale } from '../lib/typescale';
import { generateMediaBreakpoints } from '../lib/media';
import { generateSizeMixin } from '../lib/size';

test('generates size mixin correctly', t => {
    const typescale = generateTypescale(testBreakpoint);
    const media = generateMediaBreakpoints(testBreakpoint);
    const size = generateSizeMixin(typescale, media);
    t.is(
        size(0),
        dedent`
        font-size: 1.15rem;
        @media (max-width: 90em) {
            font-size: 1.15rem;
        }
        @media (max-width: 67.5em) {
            font-size: 1.125rem;
        }
        @media (max-width: 45em) {
            font-size: 1.1rem;
        }
        @media (max-width: 30em) {
            font-size: 1rem;
        }\n
    `
    );
    t.is(
        size('hero'),
        dedent`
        font-size: 4.121rem;
        @media (max-width: 90em) {
            font-size: 3.556rem;
        }
        @media (max-width: 67.5em) {
            font-size: 3.479rem;
        }
        @media (max-width: 45em) {
            font-size: 2.926rem;
        }
        @media (max-width: 30em) {
            font-size: 1.949rem;
        }\n
    `
    );
});
