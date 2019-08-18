import test from 'ava';
import dedent from 'dedent';
import { testBreakpoint } from './test-breakpoint';
import { generateMediaBreakpoints } from '../lib/media';
import { generateSpacingMixins } from '../lib/spacing';

test('generates spacing mixins correctly', t => {
    const media = generateMediaBreakpoints(testBreakpoint);
    const [margin, padding] = generateSpacingMixins(testBreakpoint, media);
    t.is(
        margin('bottom', 1),
        dedent`
        margin-bottom: 1.6100rem;
        @media (max-width: 90em) {
            margin-bottom: 1.6100rem;
        }
        @media (max-width: 67.5em) {
            margin-bottom: 1.5188rem;
        }
        @media (max-width: 45em) {
            margin-bottom: 1.4300rem;
        }
        @media (max-width: 30em) {
            margin-bottom: 1.3000rem;
        }\n
    `
    );
    t.is(
        padding('top', 4),
        dedent`
        padding-top: 6.4400rem;
        @media (max-width: 90em) {
            padding-top: 6.4400rem;
        }
        @media (max-width: 67.5em) {
            padding-top: 6.0750rem;
        }
        @media (max-width: 45em) {
            padding-top: 5.7200rem;
        }
        @media (max-width: 30em) {
            padding-top: 5.2000rem;
        }\n
    `
    );
});
