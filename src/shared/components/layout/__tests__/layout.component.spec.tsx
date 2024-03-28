import { screen } from "@testing-library/react";

import { Layout } from "src/shared/components";
import { makeContextRenderer } from "src/tests/utils/rendering";

describe("Layout: Component", () => {
  const message = "test";
  const component = () => (
    <Layout>
      <div>{message}</div>
    </Layout>
  );
  const render = makeContextRenderer(component);

  it("Should display children correctly", () => {
    render();
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("Should display header correctly", () => {
    render();
    expect(
      screen.getAllByText("Recruitment Assignment by Jakub Bielski")
    ).toBeDefined();
  });
});
