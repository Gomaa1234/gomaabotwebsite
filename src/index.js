import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Plus } from "./pages/Plus";
import { Settings } from "./pages/Settings";
import { Lightning } from "./pages/Lightning";
import { Download } from "./pages/Download";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Plus",
    element: <Plus />,
  },
  {
    path: "/Settings",
    element: <Settings />,
  },
  {
    path: "/Lightning",
    element: <Lightning />,
  },
  {
    path: "/Download",
    element: <Download />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
