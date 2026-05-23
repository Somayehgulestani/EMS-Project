import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TeacherDashboard from "./pages/TeacherDashboard";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TeacherDashboard />
  </StrictMode>,
);
