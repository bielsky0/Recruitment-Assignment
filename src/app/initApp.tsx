import { createRoot } from "react-dom/client";
import { App } from "./app.component";
import React from "react";
import { CssBaseline } from "@mui/material";

const render = () => {
  const container = document.getElementById("root");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(container!);

  root.render(
    <React.StrictMode>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <App />
      {/* </ThemeProvider> */}
    </React.StrictMode>
  );
};

export const initApp = () => {
  render();
};
