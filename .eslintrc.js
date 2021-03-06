/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
  ],
  parserOptions: {
    ecmaVersion: 9,
  },
  globals: {
    browser: true,
  },
  rules: {
    "curly": 2,
    "indent": [2, 2, { SwitchCase: 1, }],
    "padded-blocks": [2, "never"],
  },
};
