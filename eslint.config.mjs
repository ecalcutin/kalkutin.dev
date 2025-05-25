import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  // Global ignores
  { ignores: ['build/**', 'node_modules/**', 'eslint.config.mjs'] },

  // Base configurations
  js.configs.recommended,
  ts.configs.recommended,

  // TypeScript configuration - restrict to src folder only
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Import plugin configuration
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ...importPlugin.flatConfigs.recommended,
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },

  // Rule overrides
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    rules: {
      'import/no-unresolved': ['error'],
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
