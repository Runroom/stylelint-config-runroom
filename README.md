# stylelint-config-runroom

Runroom config for stylelint, it is an extension of [Stylelint config standard](https://github.com/stylelint/stylelint-config-standard).

[![Build Status](https://travis-ci.org/italodr/stylelint-config-runroom.svg?branch=master)](https://travis-ci.org/italodr/stylelint-config-runroom)

## Example

```scss
@import "route/filename.1";
@import "route/filename.2";

/**
 * Multi-line comment
 */
.selector-1,
.selector-2,
.selector-3[type="text"] {
    background: linear-gradient(#fff, rgba(0, 0, 0, .8));
    box-sizing: border-box;
    color: #333;
    display: block;
}

.selector-a,
.selector-b:not(:first-child) {
    left: 50%;
    padding: 10px !important;
    position: absolute;
    top: calc(calc(1em * 2) / 3);
    transform: translateX(-50%);

    @include breakpoint($s768) {
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &.is-main { font-size: 30px; }
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width: 60em) {
    .selector {
        /* Flush to parent comment */
        transform: translate(1, 1) scale(3);
    }
}

@media (orientation: portrait), projection and (color) {
    .selector-i + .selector-ii {
        background: color(rgb(0, 0, 0) lightness(50%));
        font-family: Helvetica, "Arial Black", sans-serif;
    }
}

/* Flush single line comment */
@media
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    .selector {
        background-image: repeating-linear-gradient(-45deg, transparent, #fff 25px, rgba(255, 255, 255, 1) 50px);
        box-shadow: 0 1px 1px #000, 0 1px 0 #fff, 2px 2px 1px 1px #ccc inset;
        height: 10rem;
        margin: 10px;
    }

    /* Flush nested single line comment */
    .selector::after {
        background-image: url(x.svg);
        content: '→';
    }
}
```

*Note: the config is tested against the CSS version of this example, as such the example contains plenty of SCSS syntax, formatting and features.*

## Installation

```bash
yarn add --dev stylelint-config-runroom
```

## Usage

Set your `stylelint` config to:

```json
{
    "extends": "stylelint-config-runroom"
}

```

In this link you will find more information about [extending stylelint](http://stylelint.io/user-guide/configuration/#extends)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
