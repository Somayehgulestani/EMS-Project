import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import FormStructures from "../components/FormsStructures";
import Footer from "../features/Authenication/SignUpComponent/Footer";
import Form from "../features/Authenication/SignUpComponent/Form";
import Header from "../features/Authenication/SignUpComponent/Header";
import Loader from "./Loader";

export default function SignUp({ setLoader, loader }) {
  const [errorMessage, setErrorMessage] = useState("");
  console.log(errorMessage);
  return (
    <>
      {loader && <Loader />}

      <FormStructures>
        <Header />
        <Form
          setLoader={setLoader}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <Footer />
      </FormStructures>
      {errorMessage && (
        <ErrorMessage key={errorMessage} ErrorMessage={errorMessage} />
      )}
    </>
  );
}
