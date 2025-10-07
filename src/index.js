import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { Product } from './pages/Product';

import { createBrowserRouter, RouterProvider } from 'react-router';

let router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/product/:id',
        Component: Product,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
