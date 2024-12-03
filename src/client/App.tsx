import { Provider as JotaiProvider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { router } from "./router";

import "@mantine/core/styles.css";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <MantineProvider>
      <JotaiProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </JotaiProvider>
    </MantineProvider>
  );
};
