import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./style.css";
import Home from "./Home.tsx";
import Essentials from "./Essentials.tsx";
import Board from "./essentials/TicTacToe.tsx";

const router = createBrowserRouter([
  {
    index: true,
    Component: Home,
  },
  {
    path: "essentials",
    children: [
      { index: true, Component: Essentials },
      {
        path: "tik-tak-toe",
        Component: Board,
      },
    ],
  },
]);

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
