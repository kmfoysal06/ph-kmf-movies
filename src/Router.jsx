import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    element: <Home />,
    children: [
        {
            index: true, Component: Home
        },
//        {
//            path: "/about",
//            Component: About,
//        },
//        {
//            path: "/weather",
//            Component: Weather ,
//        },
    ]
  },

]);

function Router() {
  return (
      <RouterProvider router={router} />
  )
}

export default Router
