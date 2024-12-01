import { createBrowserRouter, createMemoryRouter } from "react-router-dom";

import { Vite } from "./components/Vite/Vite";
import { Sandbox } from "./components/Sandbox/Sandbox";

const routes = [
  {
    path: "/",
    element: <Vite />,
  },
  {
    path: "/sandbox",
    element: <Sandbox />,
  },
];

export const router =
  typeof window === "undefined"
    ? createMemoryRouter(routes)
    : createBrowserRouter(routes);
