import { usePagination, useTagsQuery } from "../../../../shared/hooks";
import { Pagination, Table } from "../../../../shared/components";

export const TagsTable = () => {
  const { pageNumber, onNextPage, onPreviousPage } = usePagination();
  const { data, isFetching } = useTagsQuery(pageNumber);

  if (isFetching) return <>cycu</>;

  if (!data) return <>no data</>;

  const { items, hasMore } = data;

  return (
    <Table
      items={items}
      Pagination={() => (
        <Pagination
          currentPage={pageNumber}
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
          hasMore={hasMore}
        />
      )}
    />
  );
};
