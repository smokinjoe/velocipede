import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

import { Sandbox } from "./screens/Sandbox";

const routes = [
  {
    path: "/",
    element: <Sandbox />,
  },
];

export const router =
  typeof window === "undefined"
    ? createMemoryRouter(routes)
    : createBrowserRouter(routes);
