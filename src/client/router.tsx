import { createBrowserRouter } from "react-router-dom";

import { Vite } from "./components/Vite/Vite";
import { Sandbox } from "./components/Sandbox/Sandbox";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Vite />,
  },
  {
    path: "/sandbox",
    element: <Sandbox />,
  },
]);
