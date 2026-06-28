import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import RoleSelection from "../pages/RoleSelection";
import Login from "../pages/Login";
import ConfirmEmail from "../pages/ConfirmEmail";
import { Suspense } from "react";
import Loader from "../pages/Loader";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import Users from "../pages/Users";
import Students from "../pages/Students";
import Teachers from "../pages/Teachers";
import TeachersProfile from "../pages/TeachersProfile";

export default function AppRoutes() {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log(errorMessage);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />} />
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route
          path="/signup"
          element={
            <SignUp
              setLoader={setLoader}
              loader={loader}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route
          path="/Login"
          element={
            <Login
              setLoader={setLoader}
              loader={loader}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />
          }
        />
        <Route path="/Confirmation" element={<ConfirmEmail />} />
        <Route
          path="/AdminForm"
          element={
            <AdminLogin
              setErrorMessage={setErrorMessage}
              errorMessage={errorMessage}
              setLoader={setLoader}
            />
          }
        />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Users" element={<Users />} />
        <Route
          path="/Students"
          element={
            <Students setLoader={setLoader} setErrorMessage={setErrorMessage} />
          }
        />
        <Route
          path="/Instructors"
          element={
            <Teachers setLoader={setLoader} setErrorMessage={setErrorMessage} />
          }
        />
        <Route path="/TeacherProfile" element={<TeachersProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
