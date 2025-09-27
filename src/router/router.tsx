import { Home, MainLayout } from "@pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{ index: true, Component: Home }],
  },
]);
