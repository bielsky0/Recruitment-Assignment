import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";

import { App } from "src/app";
import { ReactQueryProvider } from "src/app/providers";
import { TagsFilterProvider } from "src/contexts";

const render = () => {
  const container = document.getElementById("root");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(container!);

  root.render(
    <React.StrictMode>
      <ReactQueryProvider>
        <TagsFilterProvider>
          <CssBaseline />
          <App />
        </TagsFilterProvider>
      </ReactQueryProvider>
    </React.StrictMode>
  );
};

export const initApp = () => {
  render();
};
