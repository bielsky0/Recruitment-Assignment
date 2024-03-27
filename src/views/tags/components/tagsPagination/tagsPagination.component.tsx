import { Pagination } from "src/shared/components";
import { useTagsFilter } from "src/shared/hooks/useTagsFilter";

export interface TagsPaginationProps {
  hasMore: boolean;
}

export const TagsPagination = ({ hasMore }: TagsPaginationProps) => {
  const { page, updatePage } = useTagsFilter();

  const onNextPage = () => {
    if (hasMore) {
      const newPage = page + 1;
      updatePage(newPage);
    }
  };

  const onPreviousPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      updatePage(newPage);
    }
  };
  return (
    <Pagination
      isNextDisabled={hasMore}
      currentPage={page}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
    />
  );
};
