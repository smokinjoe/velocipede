import { useState, useEffect } from "react";

export const useIsHydrated = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // This forces a rerender, so the date is rendered
    // the second time but not the first
    setHydrated(true);
  }, []);

  return hydrated;
};
