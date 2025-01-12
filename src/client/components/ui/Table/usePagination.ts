import { atom, useAtom } from "jotai";

/**
 * There will eventually be a time when there's a second data table that takes
 * advantage of pagination/limit setting. At that point I'll need to figure
 * out how to namespace these atoms so they don't conflict.
 */
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
