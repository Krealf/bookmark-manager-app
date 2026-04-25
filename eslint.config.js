// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default tseslint.config(
  // Указываем папки, которые не нужно проверять
  { ignores: ['**/dist/**', '**/node_modules/**', '**/build/**'] },

  // Базовые рекомендации ESLint
  js.configs.recommended,
  // Рекомендуемые правила для TS
  ...tseslint.configs.recommended,

  {
    // Правила для клиента (фронт)
    files: ['client/**/*.{ts,tsx}'],
    // Подключаем плагины
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    // Показываем ESLint, что у нас есть глобальные переменные window, document и т.д.
    languageOptions: {
      globals: globals.browser,
    },
    // Говорим ESLint самому посмотреть версию из package.json
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules, // рекомендуемые правила по React
      ...reactHooks.configs.recommended.rules, // Строгая проверка на хуки
      'react/react-in-jsx-scope': 'off', // не нужен в React 17+
      'react/prop-types': 'off', // у нас TypeScript, prop-types не нужен
    },
  },

  {
    // Правила для сервера
    files: ['server/**/*.ts'],
    // Показываем ESLint, что у нас есть глобальные переменные
    languageOptions: {
      globals: globals.node,
    },
  },
  // Запускаем prettier как правило ESLint
  prettierConfig,

  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  }
);
