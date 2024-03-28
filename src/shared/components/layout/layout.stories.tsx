import { StoryFn } from "@storybook/react";

import { Layout, LayoutProps } from "src/shared/components";

const Template: StoryFn<LayoutProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default {
  title: "Shared/components/layout",
  component: Layout,
};

const Child = () => {
  return <>child</>;
};

export const Default = Template.bind({});
Default.args = {
  children: <Child />,
};
