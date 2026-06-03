import FormStructures from "../components/FormsStructures";
import Footer from "../features/Authenication/LoginComponent/Footer";
import Form from "../features/Authenication/LoginComponent/Form";
import Header from "../features/Authenication/LoginComponent/Header";

export default function Login() {
  return (
    <FormStructures>
      <Header />
      <Form />
      <Footer />
    </FormStructures>
  );
}
