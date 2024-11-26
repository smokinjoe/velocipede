import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { useIsHydrated } from "./hooks/useIsHydrated";

import { router } from "./router";

import "@mantine/core/styles.css";

const queryClient = new QueryClient();

function App() {
  /**
   * Eventually remove a dependency on this hook
   * I have it here because of a style element mismatch
   * when hydrating the app on the client side
   */
  const hydrated = useIsHydrated();
  if (!hydrated) {
    return null;
  }

  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
