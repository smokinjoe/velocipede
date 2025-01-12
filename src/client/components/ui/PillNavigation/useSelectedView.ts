import { useSearchParams } from "react-router-dom";

export const useSelectedView = () => {
  const [searchParams] = useSearchParams();
  const selectedView = searchParams.get("pill");
  return selectedView;
};
