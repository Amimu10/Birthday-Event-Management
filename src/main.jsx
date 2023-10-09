import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayOut from './components/MainLayOut/MainLayOut';
import Home from './components/Home/Home';
import Contact from './components/Contact Us/Contact';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ServiceDetails from './components/SerViceDetails/ServiceDetails';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './PrivateRote/PrivateRoute';
import ErrorPage from './components/Error/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/service/:id",
        loader: () => fetch("/data.json"),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },
      {
        path: "/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path: "/blog",
        element: <PrivateRoute> <Blog></Blog> </PrivateRoute>
      },
      {
        path: "/Login",
        element: <Login></Login>
      }, 
      {
      path: "/register",
      element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />  
   </AuthProvider>
  </React.StrictMode>
);