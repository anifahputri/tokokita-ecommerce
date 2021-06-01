module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base', 
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'no-underscore-dangle': 0,
    'no-nested-ternary': 0,
    'import/prefer-default-export': 0,
  },
};
