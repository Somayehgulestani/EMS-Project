import FormStructures from "../components/FormsStructures";
import Footer from "../features/Authenication/ForgotPasswordComponent/Footer";
import Form from "../features/Authenication/ForgotPasswordComponent/Form";
import Header from "../features/Authenication/ForgotPasswordComponent/Header";
import LockIcon from "../features/Authenication/ForgotPasswordComponent/LockIcon";

export default function ForgotPassword() {
  return (
    <FormStructures>
      <LockIcon />
      <Header />
      <Form />
      <Footer />
    </FormStructures>
  );
}
