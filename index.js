module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block', 'blockless-after-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    'block-closing-brace-newline-after': 'always',
    'color-hex-case': ['lower', { severity: 'warning' }],
    indentation: 4,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'number-leading-zero': 'never',
    'selector-list-comma-newline-after': null
  }
};
