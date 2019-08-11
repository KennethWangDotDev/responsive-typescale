import test from 'ava';
import dedent from 'dedent';
import { testBreakpoint } from './test-breakpoint';
import { generateTypescale } from '../lib/typescale';
import { generateMediaBreakpoints } from '../lib/media';
import { generateSpacingMixins } from '../lib/spacing';

test('generates spacing mixins correctly', t => {
    const typescale = generateTypescale(testBreakpoint);
    const media = generateMediaBreakpoints(testBreakpoint);
    const [margin, padding] = generateSpacingMixins(typescale, media);
    t.is(
        margin('bottom', 1),
        dedent`
        margin-bottom: 1.15rem;
        @media (max-width: 90em) {
            margin-bottom: 1.15rem;
        }
        @media (max-width: 67.5em) {
            margin-bottom: 1.125rem;
        }
        @media (max-width: 45em) {
            margin-bottom: 1.1rem;
        }
        @media (max-width: 30em) {
            margin-bottom: 1rem;
        }\n
    `
    );
    t.is(
        padding('top', 4),
        dedent`
        padding-top: 4.6rem;
        @media (max-width: 90em) {
            padding-top: 4.6rem;
        }
        @media (max-width: 67.5em) {
            padding-top: 4.5rem;
        }
        @media (max-width: 45em) {
            padding-top: 4.4rem;
        }
        @media (max-width: 30em) {
            padding-top: 4rem;
        }\n
    `
    );
});
