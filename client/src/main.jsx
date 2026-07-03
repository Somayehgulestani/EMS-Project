import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { RoleSelectContextData } from "./context/RoleSelectContext";

import { TeachersManagmentContextProvider } from "./context/TeachersManagementContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TeachersManagmentContextProvider>
      <RoleSelectContextData>
        <AppRoutes />
      </RoleSelectContextData>
    </TeachersManagmentContextProvider>
  </StrictMode>,
);
