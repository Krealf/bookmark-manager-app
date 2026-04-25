import { createBrowserRouter } from 'react-router';
import { HomePage } from '@/pages/HomePage.tsx';
import { AddPage } from '@/pages/AddPage.tsx';
import { EditPage } from '@/pages/EditPage.tsx';
import { NotFoundPage } from '@/pages/NotFoundPage.tsx';
import { Layout } from '@/components/Layout/Layout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Обёртка
    children: [
      // Внутри обёртки рендерятся дети:
      { index: true, element: <HomePage /> },
      { path: 'add', element: <AddPage /> },
      { path: 'edit/:id', element: <EditPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
