import { atom, useAtom } from "jotai";

const pageAtom = atom(0);
const limitAtom = atom(20);

export const usePagination = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [limit, setLimit] = useAtom(limitAtom);

  return {
    page,
    setPage,
    limit,
    setLimit,
  };
};
