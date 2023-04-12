import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          const jobCategories = await fetch('/jobCategories.json').then(res => res.json());
          const featuredJobs = await fetch('/featuredJobs.json').then(res => res.json());
          return { jobCategories, featuredJobs };
        }
      },
      {
        path: '/blog',
        element: <Blog />,
        
      }
    ]
  }
]);


render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

