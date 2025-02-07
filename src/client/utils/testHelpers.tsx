import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const renderWithRouter = (component: JSX.Element) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: 1,
      retry: 0,
    },
  },
});

export const renderWithRouterAndQueryClient = (component: JSX.Element) => {
  return render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    </BrowserRouter>
  );
};
