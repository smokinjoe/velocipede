import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const usePillNavigation = (
  views: string[],
  selectedView: string | null
) => {
  const [currentView, setView] = useState(selectedView ?? views[0]);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ pill: currentView });
  }, [currentView]);

  const handleViewChange = (view: string) => {
    setView(view);
  };

  return { currentView, handleViewChange };
};
