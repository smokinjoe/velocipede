import { App } from "./App";

import { useIsHydrated } from "./hooks/useIsHydrated";

export const AppContainer = () => {
  /**
   * Eventually remove a dependency on this hook
   * I have it here because of a style element mismatch
   * when hydrating the app on the client side
   */
  const hydrated = useIsHydrated();
  if (!hydrated) {
    return null;
  }

  return <App />;
};
