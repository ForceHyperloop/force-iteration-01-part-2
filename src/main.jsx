import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./components/App";
import AppLayout from "./components/AppLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
