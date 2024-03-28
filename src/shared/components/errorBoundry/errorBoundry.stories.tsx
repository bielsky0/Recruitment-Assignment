import { StoryFn } from "@storybook/react";

import { ErrorBoundary, ErrorBoundaryProps } from "src/shared/components";

const Template: StoryFn<ErrorBoundaryProps> = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default {
  title: "Shared/components/errorBoundary",
  component: ErrorBoundary,
};

const ErrorComponent = () => {
  throw new Error();
};

export const Default = Template.bind({});
Default.args = {
  children: <ErrorComponent />,
};
