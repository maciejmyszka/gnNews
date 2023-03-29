import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const MainView = lazy(() => import('views/MainView'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainView />,
    children: [
      {
        path: '/country/:name',
        element: <MainView />,
      },
    ],
  },
]);
