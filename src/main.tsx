import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import About from '~/pages/About.tsx';
import Contacts from '~/pages/Contacts.tsx';

const router = createHashRouter([
 {
  path: '/',
  element: <App />,
  children: [
   {
    path: '/about',
    element: <About />,
   },
   {
    path: '/contacts',
    element: <Contacts />,
   },
  ],
 },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>
);
