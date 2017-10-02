module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block', 'blockless-after-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend', 'content', 'if', 'else', 'mixin', 'function', 'return']
      }
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['extend', 'content', 'if', 'else', 'mixin', 'function', 'return']
      }
    ],
    'color-hex-case': ['lower', { severity: 'warning' }],
    indentation: 4,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'number-leading-zero': 'never',
    'selector-list-comma-newline-after': null,
    'scss/at-rule-no-unknown': true
  }
};
