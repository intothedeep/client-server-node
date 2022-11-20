module.exports = {
    root: true, // no more eslint config search above this
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:eslint-comments/recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['webpack_build', 'ts_dist', 'node_modules', 'webpack.*', '.eslintrc.js'],
    rules: {
        // Prevent TypeScript-specific constructs from being erroneously flagged as unused
        // '@typescript-eslint/no-unused-vars'         : 'error',
        // Require PascalCased class and interface names
        // '@typescript-eslint/class-name-casing'      : 'error',
        // Require a specific member delimiter style for interfaces and type literals
        // Default Semicolon style
        '@typescript-eslint/member-delimiter-style': 'error',
        // Require a consistent member declaration order
        // '@typescript-eslint/member-ordering'        : 'error',
        // Require consistent spacing around type annotations
        '@typescript-eslint/type-annotation-spacing': 'error',
        'max-len': ['warn', { code: 200 }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, classes: true, variables: true, typedefs: true },
        ],
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'all' }],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false,
            },
        ],
        'no-param-reassign': 'error',
    },
    globals: {
        process: 'readonly',
    },
};
