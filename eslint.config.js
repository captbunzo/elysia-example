import globals from 'globals';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';

import { defineConfig } from 'eslint/config';

export default defineConfig([
    // Import recommended configs from plugins
    tseslint.configs.recommended,
    {
        ignores: ['**/dist/**', 'coverage/**', '**/node_modules/**'],
    },

    // Configuration for ESLint config file itself (needs Node.js globals)
    {
        files: ['eslint.config.js'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },

    // Configuration for TypeScript and JavaScript project files
    {
        files: ['**/*.{ts,js}'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.strictTypeChecked,
            importPlugin.flatConfigs.recommended,
            importPlugin.flatConfigs.typescript,
            comments.recommended,
            eslintConfigPrettier,
            eslintPluginUnicorn.configs.recommended,
        ],
        languageOptions: {
            globals: { ...globals.node },
            parserOptions: {
                projectService: {
                    defaultProject: 'tsconfig.json',
                    allowDefaultProject: ['eslint.config.js', '.prettierrc.ts', 'tsdown.config.ts'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/restrict-template-expressions': 'off',
            'import/no-unresolved': 'off',
            'unicorn/filename-case': [
                'error',
                {
                    case: 'kebabCase',
                    multipleFileExtensions: false,
                },
            ],
            'unicorn/prevent-abbreviations': [
                'error',
                {
                    allowList: {
                        params: true,
                        props: true,
                        Props: true,
                    },
                },
            ],
            'unicorn/no-null': 'off',
        },
    },
    // Specific overrides for certain files
    {
        files: ['src/**/*.routes.ts'],
        rules: {
            '@eslint-community/eslint-comments/disable-enable-pair': 'off',
            '@eslint-community/eslint-comments/no-unlimited-disable': 'off',
        },
    },
]);
