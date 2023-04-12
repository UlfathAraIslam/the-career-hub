import React from 'react';
import { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';

import Main from './component/Layout/Main';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Statistics from './component/Statistics/Statistics';
import NotFound from './component/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound/>,
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
        
      },
      {
        path: '/statistics',
        element: <Statistics />,
        
      }
    ]
  }
]);

render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <Route path="*" element={<NotFound />} />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

