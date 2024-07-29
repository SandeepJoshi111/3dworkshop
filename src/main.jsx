import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./pages/Portfolio.jsx";
import ReactGA from "react-ga4";

ReactGA.initialize("G-0EP2W4CX65");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
