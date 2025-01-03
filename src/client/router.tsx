import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

import { Sandbox } from "./screens/Sandbox";
import { Layout } from "./Layout";
import { Login } from "./screens/Login/Login";

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Sandbox />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export const router =
  typeof window === "undefined"
    ? createMemoryRouter(routes)
    : createBrowserRouter(routes);
