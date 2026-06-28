import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { RoleSelectContextData } from "./context/RoleSelectContext";
import { SingleTeacherContextProvider } from "./context/singleTeacherContext";
import { TeachersContextProvider } from "./context/TeachersContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TeachersContextProvider>
      <SingleTeacherContextProvider>
        <RoleSelectContextData>
          <AppRoutes />
        </RoleSelectContextData>
      </SingleTeacherContextProvider>
    </TeachersContextProvider>
  </StrictMode>,
);
