import test from 'ava';
import dedent from 'dedent';
import { generateMediaBreakpoints } from '../lib/media';
import { testBreakpoint } from './test-breakpoint';

test('generates media queries correctly', t => {
    const media = generateMediaBreakpoints(testBreakpoint);
    t.is(
        media.large('color: red;'),
        dedent`
        @media (max-width: 67.5em) {
            color: red;
        }
    `
    );
    t.is(
        media.medium('color: blue;'),
        dedent`
        @media (max-width: 45em) {
            color: blue;
        }
    `
    );
});
