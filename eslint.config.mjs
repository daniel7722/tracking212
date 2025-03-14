import eslint from '@eslint/eslintrc';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ignores: ['node_modules/**', '.next/**', 'build/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: [],
    rules: {},
  },
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ...prettierConfig,
  },
];
