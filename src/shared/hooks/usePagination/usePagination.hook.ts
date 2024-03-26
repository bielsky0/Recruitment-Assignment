import { useState } from "react";

const INITIAL_PAGE = 1;

export const usePagination = () => {
  const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);

  const onNextPage = (hasMore: boolean) => {
    if (hasMore) {
      setPageNumber((currentPage) => currentPage + 1);
    }
  };

  const onPreviousPage = () => {
    if (pageNumber > INITIAL_PAGE) {
      setPageNumber((currentPage) => currentPage - 1);
    }
  };

  return { pageNumber, onNextPage, onPreviousPage };
};
