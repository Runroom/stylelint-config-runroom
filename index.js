module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "at-rule-empty-line-before": [ "always", {
            except: [ "blockless-group", "first-nested" ],
            ignore: ["after-comment"],
        } ],
        "block-closing-brace-newline-after": "always",
        "color-hex-case": ["lower", {"severity": "warning"}],
        "declaration-block-properties-order": "alphabetical",
        "indentation": 4,
        "number-leading-zero": "never",
        "selector-list-comma-newline-after": null,
    }
};
