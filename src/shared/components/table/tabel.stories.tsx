import { TableRow, TableCell } from "@mui/material";
import { StoryFn } from "@storybook/react";

import { Table, TableProps } from "src/shared/components";
import { TABLE_HEADERS } from "src/views/tags";

type StoryItem = {
  name: string;
  count: number;
};

const Template: StoryFn<TableProps<StoryItem>> = ({
  headers,
  rowRenderer,
  items,
}) => {
  return <Table headers={headers} rowRenderer={rowRenderer} items={items} />;
};

export default {
  title: "Shared/components/table",
  component: Table,
};

export const Empty = Template.bind({});
Empty.args = {
  rowRenderer: ({ name, count }) => {
    return (
      <TableRow key={`${name}_${count}`}>
        <TableCell>{name}</TableCell>
        <TableCell>{count}</TableCell>
      </TableRow>
    );
  },
  items: [],
  headers: TABLE_HEADERS,
};

export const WithData = Template.bind({});
WithData.args = {
  rowRenderer: ({ name, count }) => {
    return (
      <TableRow key={`${name}_${count}`}>
        <TableCell>{name}</TableCell>
        <TableCell>{count}</TableCell>
      </TableRow>
    );
  },
  items: [{ name: "javascript", count: 215021 }],
  headers: TABLE_HEADERS,
};
