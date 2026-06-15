import ErrorMessage from "../components/ErrorMessage";
import FormStructures from "../components/FormsStructures";
import Footer from "../features/Authenication/AdminLoginComponent/Footer";
import Form from "../features/Authenication/AdminLoginComponent/Form";
import Header from "../features/Authenication/AdminLoginComponent/Header";

export default function AdminLogin({
  setSuccessMessage,
  setErrorMessage,
  setLoader,
  errorMessage,
}) {
  console.log(errorMessage);

  return (
    <>
      <FormStructures>
        <Header />
        <Form
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
          setLoader={setLoader}
        />
        <Footer />
      </FormStructures>
      {errorMessage && <ErrorMessage ErrorMessage={errorMessage} />}
    </>
  );
}
