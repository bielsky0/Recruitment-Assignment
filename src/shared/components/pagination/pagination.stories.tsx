import { StoryFn } from "@storybook/react";
import { useState } from "react";

import { Pagination } from "src/shared/components";

const Template: StoryFn<any> = () => {
  const [page, setPage] = useState(1);

  const onNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const onPreviousPage = () => {
    if (page > 1) {
      setPage((currentPage) => currentPage - 1);
    }
  };

  return (
    <Pagination
      currentPage={page}
      onNextPage={onNextPage}
      onPreviousPage={onPreviousPage}
      isNextDisabled={page >= 100}
    />
  );
};

export default {
  title: "Shared/components/pagination",
  component: Pagination,
};

export const Default = Template.bind({});
