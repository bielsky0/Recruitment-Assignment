import { useTagsQuery } from "../../../../shared/hooks";
import { EmptyTable, Table } from "../../../../shared/components";
import { useTagsFilter } from "../../../../shared/hooks/useTagsFilter";
import { TableSkeleton, TagsPagination } from "..";
import { TABLE_HEADERS } from "../..";
import { TableCell, TableRow } from "@mui/material";

export const TagsTable = () => {
  const { search, order, sort, page, pageSize } = useTagsFilter();
  const { data, isFetching, error } = useTagsQuery({
    inname: search,
    order: order.toString(),
    sort: sort.toString(),
    page: page.toString(),
    pagesize: pageSize.toString(),
  });

  if (error)
    return (
      <EmptyTable
        headers={TABLE_HEADERS}
        message="Something went wrong, refresh page"
        severity="error"
      />
    );

  if (isFetching) return <TableSkeleton />;

  if (!data)
    return (
      <EmptyTable
        headers={TABLE_HEADERS}
        message="Something went wrong, check your filters or refresh the page"
        severity="info"
      />
    );

  const { items, hasMore } = data;

  return (
    <Table
      items={items}
      rowRenderer={({ name, count }) => (
        <TableRow key={`${name}_${count}`}>
          <TableCell>{name}</TableCell>
          <TableCell>{count}</TableCell>
        </TableRow>
      )}
      headers={TABLE_HEADERS}
      Pagination={() => <TagsPagination hasMore={hasMore} />}
    />
  );
};
