import config from '../';
import stylelint from 'stylelint';
import test from 'ava';

const validCss = `@import url(x.css);
@import url(y.css);

@each $val in $breakpoints {
    $namespace: nth($val, 1);
    $breakpoint: nth($val, 2);

    @include breakpoint($breakpoint) {
        .foo { color: rebeccapurple; }
    }

    @for $i from 1 through $grid-columns {
        .foo { color: peru; }
    }
}

@function breakpoint-generator($type, $size1, $size2: '', $orientation: '') {
    @if $orientation != '' {
        $orientation: " and (orientation: #{$orientation})";
    }

    $mq: '';

    @if $type == 'min' {
        $mq: "and (min-width: #{nth($size1, 1)})";
    }
}

@function testMe() {
    $value: $number;
    @if (type-of($value) == number) {
        $value: function1($value);
    }
    @else if (1 == 1) {
        $value: function2($value);
    }
    @return $value;
}

@mixin mixinSample() {
    @media screen and (min-width: 40rem) {
        @content;
    }
}

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
}

.selector-a.is-main,
.selector-b.is-main:not(:first-child) { font-size: 30px; }

.selector-x { width: 10%; }
.selector-y { width: 20%; }
.selector-z { width: 30%; }

.scss-selector {
    @extend .selector-x;
}

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
`;

const invalidCss = `a {
    background: #000000;
}
`;

test('no warnings with valid css', t => {
  return stylelint
    .lint({
      code: validCss,
      config: config
    })
    .then(data => {
      const { errored, results } = data;
      const { warnings } = results[0];
      t.falsy(errored, 'no errored');
      t.is(warnings.length, 0, 'flags no warnings');
    });
});

test('a warning with invalid css', t => {
  return stylelint
    .lint({
      code: invalidCss,
      config: config
    })
    .then(data => {
      const { errored, results } = data;
      const { warnings } = results[0];
      t.truthy(errored, 'errored');
      t.is(warnings.length, 1, 'flags one warning');
      t.is(warnings[0].text, 'Expected "#000000" to be "#000" (color-hex-length)', 'correct warning text');
    });
});
