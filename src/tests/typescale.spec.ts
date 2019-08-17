import test from 'ava';
import { generateTypescale } from '../lib/typescale';
import { testBreakpoint } from './test-breakpoint';

test('generates typescale correctly', t => {
    const typescale = generateTypescale(testBreakpoint);
    t.is(typescale.default(0), 1.15);
    t.is(typescale.default(7), 4.121);
});
