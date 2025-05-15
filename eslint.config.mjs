import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  // Global ignores
  { ignores: ['dist/**', 'node_modules/**', 'eslint.config.mjs'] },

  // Base configurations
  js.configs.recommended,
  ts.configs.recommended,

  // TypeScript configuration - restrict to src folder only
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Import plugin configuration
  {
    files: ['src/**/*.ts'],
    ...importPlugin.flatConfigs.recommended,
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.ts', '.mjs'],
        },
      },
    },
  },

  // Rule overrides
  {
    files: ['src/**/*.ts'],
    rules: {
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^eslint/', '^@eslint/', 'typescript-eslint'],
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            ['sibling', 'index'],
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],

      // General rules
      'no-console': 'error',
    },
  },
]);
