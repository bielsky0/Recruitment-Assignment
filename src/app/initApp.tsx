import { createRoot } from "react-dom/client";
import { App } from "./app.component";
import React from "react";
import { CssBaseline } from "@mui/material";
import { ReactQueryProvider } from "./providers";

const render = () => {
  const container = document.getElementById("root");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(container!);

  root.render(
    <React.StrictMode>
      <ReactQueryProvider>
        <CssBaseline />
        <App />
      </ReactQueryProvider>
    </React.StrictMode>
  );
};

export const initApp = () => {
  render();
};
