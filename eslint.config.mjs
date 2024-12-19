import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config} */
export default {
  settings: {
    react: {
      version: 'detect', // Ini akan secara otomatis mendeteksi versi React yang Anda gunakan
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Matikan aturan ini jika menggunakan React 17 atau lebih baru
  },
  ignores: ['node_modules', 'build', 'dist'],
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
      languageOptions: {
        globals: globals.browser,
      },
      extends: [
        pluginJs.configs.recommended, // Menambahkan konfigurasi ESLint untuk JS
        ...tseslint.configs.recommended, // Menambahkan konfigurasi ESLint untuk TypeScript
        pluginReact.configs.recommended, // Menambahkan konfigurasi ESLint untuk React
      ],
    },
  ],
};
