import { createBrowserRouter } from 'react-router';
import { HomePage } from '@/pages/HomePage/HomePage.tsx';
import { NotFoundPage } from '@/pages/NotFoundPage.tsx';
import { Layout } from '@/components/Layout/Layout.tsx';
import { ArchivedPage } from '@/pages/Archived/ArchivedPage.tsx';

// Создаём роутер
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Обёртка
    children: [
      // Внутри обёртки рендерятся дети:
      { index: true, element: <HomePage /> },
      { path: 'archived', element: <ArchivedPage /> },
    ],
  },
  {
    // Все остальные неизвестные пути возвращают NotFound
    path: '*',
    element: <NotFoundPage />,
  },
]);
