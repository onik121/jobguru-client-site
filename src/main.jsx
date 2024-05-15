import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Details from './pages/Details';
import PrivateRoute from './route/PrivateRouter';
import AllJobs from './pages/AllJobs';
import MyPostedJobs from './pages/MyPostedJobs';
import UpdateJobData from './pages/UpdateJobData';
import Error from './pages/Error';
import Mybids from './pages/Mybids';
import AddJob from './pages/AddJob';
import Blog from './pages/Blog';
import { Scroll } from './components/Scroll';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/id/${params.id}`)
      },
      {
        path: '/all-jobs',
        element: <AllJobs></AllJobs>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
      },
      {
        path: '/add-job',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: '/my-posted-job',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <UpdateJobData></UpdateJobData>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/id/${params.id}`)
      },
      {
        path: '/applied-jobs',
        element: <PrivateRoute><Mybids></Mybids></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Toaster position="top-right" />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
