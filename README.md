# stylelint-config-runroom

> Runroom config for stylelint.

It is derived from the (Stylelint config standard)[https://github.com/stylelint/stylelint-config-standard].

## Example

```css
@import url(x.css);
@import url(y.css);

/**
 * Multi-line comment
 */

.selector-1,
.selector-2,
.selector-3[type="text"] {
  background: linear-gradient(#fff, rgba(0, 0, 0, 0.8));
  box-sizing: border-box;
  display: block;
  color: #333;
}

.selector-a,
.selector-b:not(:first-child) {
  padding: 10px !important;
  top: calc(calc(1em * 2) / 3);
}

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

/* Single-line comment */

@media (min-width >= 60em) {
  .selector {
    /* Flush to parent comment */
    transform: translate(1, 1) scale(3);
  }
}

@media (orientation: portrait), projection and (color) {
  .selector-i + .selector-ii {
    background: color(rgb(0, 0, 0) lightness(50%));
    font-family: helvetica, "arial black", sans-serif;
  }
}

/* Flush single line comment */
@media
  screen and (min-resolution: 192dpi),
  screen and (min-resolution: 2dppx) {
  .selector {
    background-image:
      repeating-linear-gradient(
        -45deg,
        transparent,
        #fff 25px,
        rgba(255, 255, 255, 1) 50px
      );
    margin: 10px;
    margin-bottom: 5px;
    box-shadow:
      0 1px 1px #000,
      0 1px 0 #fff,
      2px 2px 1px 1px #ccc inset;
    height: 10rem;
  }

  /* Flush nested single line comment */
  .selector::after {
    content: '→';
    background-image: url(x.svg);
  }
}
```

*Note: the config is tested against this example, as such the example contains plenty of CSS syntax, formatting and features.*

## Installation

```bash
npm install stylelint-config-runroom --save-dev
```

or the minified way

```bash
npm i -D stylelint-config-runroom
```

## Usage

Set your `stylelint` config to:

```json
{
    "plugins": [
        "stylelint-scss"
    ],
    "extends": "stylelint-config-runroom"
}

```

If you've globally installed `stylelint-config-standard` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-standard` in your config e.g.

```json
{
    "plugins": [
        "stylelint-scss"
    ],
    "extends": "/absolute/path/to/stylelint-config-runroom"
}

```

In this link you will find more information about (extending stylelint)[http://stylelint.io/user-guide/configuration/#extends]

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
