import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { CustomThemeProvider } from "@theme/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomThemeProvider>
      <RouterProvider router={router} />
    </CustomThemeProvider>
  </StrictMode>
);
