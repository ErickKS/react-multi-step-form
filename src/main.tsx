import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";

import Global from "./theme/Global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global />

    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
