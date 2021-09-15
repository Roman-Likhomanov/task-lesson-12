module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "import/extensions": "off",
    "no-shadow": "off",
    "no-return-await": "off",
    "no-undef": "off",
    "func-names": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "default-case": "off",
    "no-useless-escape": "off",
    "no-alert": "off",
    "no-console": "off",
    "max-len": "off",
    "import/prefer-default-export": "off",
  },
};
