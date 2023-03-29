import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import App from "./App";
import Root from "./routes/Root";
import ErrorPage from "./routes/Error";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Index from "./routes/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  //   errorElement: <ErrorPage />,
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
