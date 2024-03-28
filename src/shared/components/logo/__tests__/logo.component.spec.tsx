import { screen } from "@testing-library/react";

import { Logo } from "src/shared/components";
import { makeContextRenderer } from "src/tests/utils/rendering";

describe("Logo: Component", () => {
  const component = () => <Logo />;
  const render = makeContextRenderer(component);

  it("Should display Logo", () => {
    render();
    expect(screen.getByTestId("test-logo")).toBeInTheDocument();
  });
});
