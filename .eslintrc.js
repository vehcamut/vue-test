module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'airbnb',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    //"@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/member-delimiter-style": "warn",
   // "@typscript-eslint/semi": "error",//["error", "always"],
    //"semi": "off",
    "no-unexpected-multiline": "error",
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //'vue/no-mutating-props': [0, { "propProps": true }],
  },
}
