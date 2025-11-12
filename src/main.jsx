import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AuthProvider } from "./admin/context/AuthContext.jsx";
import { DataRefreshProvider } from "./admin/context/DataRefreashContext.jsx";

import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataRefreshProvider>
          <App />
        </DataRefreshProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
