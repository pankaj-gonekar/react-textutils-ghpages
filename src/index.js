
import React from 'react'
import ReactDOM from 'react-dom'
import About from './Component/About'
import Navbar from './Component/Navbar'
import TextForm from './Component/TextForm'
import ErrorPage from './Component/ErrorPage'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage /> ,
    children: [
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/",
        element: <TextForm heading="Enter text to analyze" />,
      },
    ],

  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
