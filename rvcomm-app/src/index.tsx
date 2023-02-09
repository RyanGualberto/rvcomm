import React from "react";
import ReactDOM from "react-dom/client";
import * as Application from "./routes/index.routes";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Application.ApplicationRoutes />
  </React.StrictMode>
);
