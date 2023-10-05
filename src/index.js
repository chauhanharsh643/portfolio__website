import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Coding_profile from './Pages/Coding_profile';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/coding_profile",
        element: <Coding_profile/>,
    },
  ]);

ReactDOM.render(<RouterProvider router={router}/>, document.querySelector("#root"))
