/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  env: {
    commonjs: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/node_modules/**'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    'prettier/prettier': [
      'error',

      {
        endOfLine: 'crlf',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    /**
     * 改行ルール
     * @see https://typescript-eslint.io/rules/padding-line-between-statements/
     */
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": ["block-like","if",]
      },
      {
        "blankLine": "always",
        "prev": ["block-like","if"],
        "next": "*"
      }
    ],


    /**
     * 変数名ルール定義
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
     * @see https://dev.classmethod.jp/articles/shuntaka9576-check-eslint/
     */
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'memberLike'],
        format: ['strictCamelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: ['function', 'parameter', 'method'],
        format: ['strictCamelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: ['typeLike'],
        format: ['StrictPascalCase'],
      },

      {
        selector: ['enum', 'enumMember'],
        format: ['UPPER_CASE'],
      },
    ],

    /**
     * 複雑度追加
     * */
    complexity: ['error', 20],

  },
};
