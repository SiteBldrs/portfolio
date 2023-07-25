import "./index.scss";
import React from "react";
import { router } from "routes";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
