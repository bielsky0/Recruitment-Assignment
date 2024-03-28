import { TableRow, TableCell } from "@mui/material";
import { screen } from "@testing-library/react";

import { Table, TableProps } from "src/shared/components";
import { makeContextRenderer } from "src/tests/utils/rendering";
import { TABLE_HEADERS } from "src/views/tags";

type TestItem = {
  name: string;
  count: number;
};

describe("Table: Component", () => {
  const defaultProps: TableProps<TestItem> = {
    headers: TABLE_HEADERS,
    items: [],
    rowRenderer: ({ name, count }) => (
      <TableRow key={`${name}_${count}`}>
        <TableCell>{name}</TableCell>
        <TableCell>{count}</TableCell>
      </TableRow>
    ),
  };

  const component = (props: Partial<TableProps<TestItem>>) => (
    <Table {...defaultProps} {...props} />
  );
  const render = makeContextRenderer(component);

  it("Should display items correctly", () => {
    render({ items: [{ name: "test", count: 1 }] });
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
