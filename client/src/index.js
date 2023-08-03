import "./index.scss";
import React from "react";
import { router } from "routes";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <Toaster
      position="top-left"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 10000,
        style: {
          background: "#fff",
          color: "#000",
          fontSize: "1.4rem",
          border: "1px solid #rgba(0,0,0,0.5)",
        },
      }}
    />
    <RouterProvider router={router} />
  </>
);
