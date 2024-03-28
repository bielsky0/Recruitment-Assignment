import { StoryFn } from "@storybook/react";

import { EmptyTable, EmptyTableProps } from "src/shared/components";
import { TABLE_HEADERS } from "src/views/tags";

const Template: StoryFn<EmptyTableProps> = ({ message, severity, headers }) => {
  return <EmptyTable message={message} severity={severity} headers={headers} />;
};

export default {
  title: "Shared/components/emptyTable",
  component: EmptyTable,
};

export const Info = Template.bind({});
Info.args = {
  message: "Something went wrong",
  severity: "info",
  headers: TABLE_HEADERS,
};

export const Error = Template.bind({});
Error.args = {
  message: "Something went wrong",
  severity: "error",
  headers: TABLE_HEADERS,
};

export const Warn = Template.bind({});
Warn.args = {
  message: "Something went wrong",
  severity: "warning",
  headers: TABLE_HEADERS,
};
