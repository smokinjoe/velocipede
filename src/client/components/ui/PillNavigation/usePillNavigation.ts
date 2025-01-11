import { useState } from "react";

export const usePillNavigation = (defaultView: string) => {
  const [currentView, setView] = useState(defaultView);

  const handleViewChange = (view: string) => {
    setView(view);
  };

  return { currentView, handleViewChange };
};
