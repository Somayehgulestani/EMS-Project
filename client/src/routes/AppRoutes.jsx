import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import RoleSelection from "../pages/RoleSelection";
import Login from "../pages/Login";
import ConfirmEmail from "../pages/ConfirmEmail";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Confirmation" element={<ConfirmEmail />} />
      </Routes>
    </BrowserRouter>
  );
}
