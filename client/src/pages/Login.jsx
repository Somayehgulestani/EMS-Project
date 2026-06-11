import ErrorMessage from "../components/ErrorMessage";
import FormStructures from "../components/FormsStructures";
import SuccessMessage from "../components/SuccessMessage";
import Footer from "../features/Authenication/LoginComponent/Footer";
import Form from "../features/Authenication/LoginComponent/Form";
import Header from "../features/Authenication/LoginComponent/Header";

export default function Login({
  errorMessage,
  setErrorMessage,
  setLoader,
  loader,
  setSuccessMessage,
  successMessage,
}) {
  console.log(errorMessage);

  return (
    <>
      {/* {SuccessMessage !== "" && (
        <SuccessMessage successMessage={successMessage} />
      )} */}
      <FormStructures>
        <Header />
        <Form
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          setLoader={setLoader}
          loader={loader}
          setSuccessMessage={setSuccessMessage}
          successMessage={successMessage}
        />
        <Footer />
      </FormStructures>
      {errorMessage && <ErrorMessage ErrorMessage={errorMessage} />}
    </>
  );
}
