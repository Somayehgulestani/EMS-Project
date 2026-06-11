import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import RoleSelection from "../pages/RoleSelection";
import Login from "../pages/Login";
import ConfirmEmail from "../pages/ConfirmEmail";
import { Suspense } from "react";
import Loader from "../pages/Loader";

export default function AppRoutes() {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

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
              successMessage={successMessage}
              setSuccessMessage={setSuccessMessage}
            />
          }
        />
        <Route path="/Confirmation" element={<ConfirmEmail />} />
      </Routes>
    </BrowserRouter>
  );
}
