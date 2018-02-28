module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: {
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['first-nested', 'blockless-after-same-name-blockless'],
                ignore: ['after-comment', 'inside-block']
            }
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'extend',
                    'content',
                    'if',
                    'else',
                    'elseif',
                    'each',
                    'for',
                    'error',
                    'mixin',
                    'function',
                    'return',
                    'include'
                ]
            }
        ],
        'block-closing-brace-newline-after': [
            'always',
            {
                ignoreAtRules: [
                    'extend',
                    'content',
                    'if',
                    'else',
                    'elseif',
                    'each',
                    'for',
                    'error',
                    'mixin',
                    'function',
                    'return',
                    'include'
                ]
            }
        ],
        'color-hex-case': ['lower', { severity: 'warning' }],
        indentation: 4,
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-alphabetical-order': true,
        'number-leading-zero': 'never',
        'selector-list-comma-newline-after': null,
        'scss/at-rule-no-unknown': true,
        'no-missing-end-of-source-newline': false
    }
};
