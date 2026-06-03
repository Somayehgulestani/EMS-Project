import FormStructures from "../components/FormsStructures";
import Footer from "../features/Authenication/SignUpComponent/Footer";
import Form from "../features/Authenication/SignUpComponent/Form";
import Header from "../features/Authenication/SignUpComponent/Header";

export default function SignUp() {
  return (
    <FormStructures>
      <Header />
      <Form />
      <Footer />
    </FormStructures>
  );
}
