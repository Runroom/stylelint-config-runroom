module.exports = {
    {
        "extends": "stylelint-config-standard",
        "rules": {
            "at-rule-empty-line-before": [ "always", {
                except: [ "blockless-group", "first-nested" ],
                ignore: ["after-comment"],
            } ],
            "block-closing-brace-newline-after": "always",
            "color-hex-case": ["lower", {"severity": "warning"}],
            "color-no-invalid-hex": false,
            "declaration-block-properties-order": "alphabetical",
            "indentation": 4,
            "number-leading-zero": "never",
            "property-no-unknown": false,
            "selector-list-comma-newline-after": null,
        }
    }
};
