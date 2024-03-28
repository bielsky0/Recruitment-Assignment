import { screen } from "@testing-library/react";

import { EmptyTable } from "src/shared/components";
import { makeContextRenderer } from "src/tests/utils/rendering";
import { TABLE_HEADERS } from "src/views/tags";

describe("EmptyTable: Component", () => {
  const message = "Something went wrong";
  const component = () => (
    <EmptyTable headers={TABLE_HEADERS} message={message} severity="info" />
  );
  const render = makeContextRenderer(component);

  it("Should display message correctly", () => {
    render();
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
