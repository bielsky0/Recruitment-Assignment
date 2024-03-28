import { screen } from "@testing-library/react";

import { ErrorBoundary } from "src/shared/components";
import { makeContextRenderer } from "src/tests/utils/rendering";

describe("ErrorBoundry: Component", () => {
  const message = "test";
  const component = () => (
    <ErrorBoundary>
      <div>{message}</div>
    </ErrorBoundary>
  );
  const render = makeContextRenderer(component);

  it("Should display children correctly", () => {
    render();
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
