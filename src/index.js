import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Fire} from "./pages/Fire";
import {Plus} from "./pages/Plus";
import {Settings} from "./pages/Settings";
import {Lightning} from "./pages/Lightning";
import {Poop} from "./pages/Poop"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pages/Fire",
    element: <Fire />,
  },
  {
    path: "/pages/Plus",
    element: <Plus />,
  },
  {
    path: "/pages/Settings",
    element: <Settings />,
  },
  {
    path: "/pages/Lightning",
    element: <Lightning />,
  },
  {
    path: "/pages/Poop",
    element: <Poop />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
