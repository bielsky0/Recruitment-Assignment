import { usePagination, useTagsQuery } from "../../../../shared/hooks";
import { Pagination, Table } from "../../../../shared/components";
import { useTagsFilter } from "../../../../shared/hooks/useTagsFilter";

export const TagsTable = () => {
  const { search, order, sort, page, pageSize } = useTagsFilter();
  const { pageNumber, onNextPage, onPreviousPage } = usePagination();
  const { data, isFetching } = useTagsQuery({
    inname: search,
    order: order as string,
    sort: sort as string,
    page: String(page),
    pagesize: String(pageSize),
  });

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
