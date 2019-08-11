# responsive-typescale

> Responsive typography made easy. Different modular scales at each breakpoint.

responsive-typescale outputs responsive CSS as JavaScript strings. It is designed to be used with modern CSS-in-JS libraries such as [styped-components](https://github.com/styled-components/styled-components) or [emotion](https://github.com/emotion-js/emotion). Alternatively, the outputted strings can be appended onto the `<head>` directly, for example using [insert-css](https://github.com/substack/insert-css).

## Install

```
$ npm install responsive-typescale
```

## Usage

```js
import initResponsiveTypescale from 'responsive-typescale';

const breakpoints = {
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

const responsiveTypescale = initResponsiveTypescale(breakpoints);
responsiveTypescale.size(7);
```

String output:

```css
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
}
```

## API

### initResponsiveTypescale(breakpoints?)

Creates a `responsive-typescale` instance that uses the passed breakpoints. Returns an object with the following functions:

* [size](#initresponsivetypescalesizescalelevel)
* [padding](#initresponsivetypescalepaddingdirection-rhythmamount)
* [margin](#initresponsivetypescalemargindirection-rhythmamount)
* [media](#initresponsivetypescalemediabreakpointname-css)

#### breakpoints

Type: `object` - (TS: [`Breakpoints`](src/lib/breakpoints.ts#L7))

Default: [`sensibleDefaultBreakpoints`](src/lib/breakpoints.ts#L12)

An object containing each [`Breakpoint`](src/lib/breakpoints.ts#L1). A `Breakpoint` contains a `width` key indicating when it activates, and its associated modular scale. The names of the breakpoints are used in the [media](#initresponsivetypescalemediabreakpointname-css) function.

Note: It is required to have a Breakpoint with the key `default`. The `default` breakpoint does not need to have a `width` key.

### initResponsiveTypescale().size(scaleLevel)

Returns a `string` with proper CSS that sets the `font-size` to the passed modular scale level. Uses the passed breakpoint from `initResponsiveTypescale`, and the returned string contains the proper media queries for each breakpoint.

#### scaleLevel

Type: `number | string` - (TS: [`ScaleLevel`](src/lib/typescale.ts#L4))

Modular scale level, from `0` to `7`. Altneratively, semantic aliases `p`, `h6` to `h1`, and `hero` can be used, too.

### initResponsiveTypescale().padding(direction, rhythmAmount)

Returns a `string` with proper CSS that sets `padding` in the specified direction by the specified rhythm amount.  Uses the passed breakpoint from `initResponsiveTypescale`, and the returned string contains the proper media queries for each breakpoint.

#### direction

Type: `string` - (TS: [`Direction`](src/lib/spacing.ts#L4))

Direction to apply the padding: `top`, `bottom`, `left`, or `right`.

#### rhythmAmount

Type: `number`

A rhythm is a unit that is defined by the line-height of the body text. (Body text refers to the modular scale level of 0).

### initResponsiveTypescale().margin(direction, rhythmAmount)

Same as the [`padding`](#initresponsivetypescalepaddingdirection-rhythmamount) function, except it sets the `margin` CSS property.

### initResponsiveTypescale().media[breakpointName] (css)

Helper function to generate CSS strings that target the specified breakpoint.

#### breakpointName

Type: `string`

Name (object key) of the breakpoint.

#### css

Type: `string`

Example (using a `responsive-typescale` instance that was initialized with the [`sensibleDefaultBreakpoints`](src/lib/breakpoints.ts#L12)):

```js
media.large('color: red;')
```

String output:

```css
@media (max-width: 67.5em) {
    color: red;
}
```

## Tips

### Exporting the `responsive-typescale` Instance

It's a good idea to initialize the library using initResponsiveTypescale, and then export the instance.

`typescale.js`

```js
import initResponsiveTypescale from 'responsive-typescale';

const responsiveTypescale = initResponsiveTypescale();

export default responsiveTypescale;
```

`anotherFile.js`

```js
import { size, padding } from './typescale.js';

const componentStyle = `
    ${size(0)}
    ${padding('top', 3)}
`;
```
