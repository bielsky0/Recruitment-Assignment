import { StoryFn } from "@storybook/react";
import { Logo } from "src/shared/components";

const Template: StoryFn<any> = () => {
  return <Logo />;
};

export default {
  title: "Shared/components/logo",
  component: Logo,
};

export const Default = Template.bind({});
