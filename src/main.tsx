import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./style.css";
import Home from "./Home.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    index: true,
    Component: Home,
  },
  {
    path: "app",
    Component: App,
  },
]);

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
