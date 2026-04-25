import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Создаём alias для удобного импорта
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    // Для каждого scss модуля
    preprocessorOptions: {
      scss: {
        // loadPaths говорит scss где искать файлы по имени
        loadPaths: [path.resolve(__dirname, 'src/styles')],
        // Автоматическое добавление данной строки
        additionalData: `
        @use "variables" as *;
        @use "helpers" as *;
        `,
      },
    },
  },
  // Проксируем запросы, т.е. делаем запрос на api/health, а они идут сразу на сервер
  server: {
    proxy: {
      '/api': 'http://localhost:3001', // запросы к /api идут на Express
    },
  },
});
