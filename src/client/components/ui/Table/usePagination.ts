import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);

  return {
    page,
    setPage,
    limit,
    setLimit,
  };
};
