import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { RoleSelectContextData } from "./context/RoleSelectContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoleSelectContextData>
      <AppRoutes />
    </RoleSelectContextData>
  </StrictMode>,
);
