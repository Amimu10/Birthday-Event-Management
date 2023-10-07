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
import Services from './components/Services/Services';
import ServiceDetails from './components/SerViceDetails/ServiceDetails';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './PrivateRote/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",  
        element: <Services></Services>    
      },
      {
        path: "/service/:id",
        loader: () => fetch("/data.json"),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/contact",
        element: <Contact></Contact> 
      },
      {
        path: "/blog",
        element: <Blog></Blog> 
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