import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";

import { App } from "src/app";
import { ReactQueryProvider } from "src/app/providers";
import { TagsFilterProvider } from "src/contexts";
import { StrictMode } from "react";

const render = () => {
  const container = document.getElementById("root");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(container!);

  root.render(
    <StrictMode>
      <ReactQueryProvider>
        <TagsFilterProvider>
          <CssBaseline />
          <App />
        </TagsFilterProvider>
      </ReactQueryProvider>
    </StrictMode>
  );
};

export const initApp = () => {
  render();
};
