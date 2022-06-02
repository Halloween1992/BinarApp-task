import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextPorvider } from "./components/Store/auth-context";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextPorvider>
      <App />
    </AuthContextPorvider>
  </BrowserRouter>
);
