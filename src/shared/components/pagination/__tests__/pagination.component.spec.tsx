import { screen } from "@testing-library/react";

import { Pagination } from "src/shared/components";
import { makeContextRenderer } from "src/tests/utils/rendering";

describe("Pagination: Component", () => {
  const component = () => (
    <Pagination
      onNextPage={() => {}}
      onPreviousPage={() => {}}
      currentPage={1}
      isNextDisabled={false}
    />
  );
  const render = makeContextRenderer(component);

  it("Should display Pagination", () => {
    render();
    expect(screen.getByTestId("current-page")).toBeInTheDocument();
    expect(screen.getByTestId("current-page").textContent).toBe("1");
  });
});
