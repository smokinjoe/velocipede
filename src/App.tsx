import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { router } from "./router";

import "@mantine/core/styles.css";

const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
