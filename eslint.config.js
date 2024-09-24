import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    ...js.configs.recommended,
    ignores: [
      '**/.*',
      'dist/*',
      '*.d.ts',
      'public/*',
      'src/assets/**',
      'src/**/iconfont/**',
    ],
    languageOptions: {
      globals: {
        // index.d.ts
        RefType: 'readonly',
        EmitType: 'readonly',
        TargetContext: 'readonly',
        ComponentRef: 'readonly',
        ElRef: 'readonly',
        ForDataType: 'readonly',
        AnyFunction: 'readonly',
        PropType: 'readonly',
        Writable: 'readonly',
        Nullable: 'readonly',
        NonNullable: 'readonly',
        Recordable: 'readonly',
        ReadonlyRecordable: 'readonly',
        Indexable: 'readonly',
        DeepPartial: 'readonly',
        Without: 'readonly',
        Exclusive: 'readonly',
        TimeoutHandle: 'readonly',
        IntervalHandle: 'readonly',
        Effect: 'readonly',
        ChangeEvent: 'readonly',
        WheelEvent: 'readonly',
        ImportMetaEnv: 'readonly',
        Fn: 'readonly',
        PromiseFn: 'readonly',
        ComponentElRef: 'readonly',
        parseInt: 'readonly',
        parseFloat: 'readonly',
      },
    },
    rules: {
      'no-debugger': 'off',
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue,
    },
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  {
    files: ['**/*.?([cm])js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
]
