import {
  createBrowserRouter,
  createMemoryRouter,
  RouteObject,
} from "react-router-dom";

import Layout from "client/Layout";
import Login from "client/screens/Login/Login";
import Me from "client/screens/Me/Me";
import Workouts from "client/screens/Workouts/Workouts";
import WorkoutContainer from "./screens/Workout/WorkoutContainer";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/workouts",
        element: <Workouts />,
      },
      {
        path: "/workouts/:id",
        element: <WorkoutContainer />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/me",
        element: <Me />,
      },
    ],
  },
];

export const router =
  typeof window === "undefined"
    ? createMemoryRouter(routes)
    : createBrowserRouter(routes);
