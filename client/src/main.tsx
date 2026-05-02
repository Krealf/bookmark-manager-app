import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router.tsx';

// Создаём точку входа
createRoot(document.getElementById('root')!).render(
  // Включаем строгие проверки
  <StrictMode>
    {/* Оборачиваем в Router Provider*/}
    <RouterProvider router={router} />
  </StrictMode>
);
