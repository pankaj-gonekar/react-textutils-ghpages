
import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {createHashRouter,RouterProvider} from 'react-router-dom';
import About from './Component/About'
import Navbar from './Component/Navbar'
import TextForm from './Component/TextForm'
import ErrorPage from './Component/ErrorPage'
const App = createHashRouter([
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
  <RouterProvider router={App} />
);
