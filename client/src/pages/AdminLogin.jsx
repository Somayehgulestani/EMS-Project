import FormStructures from "../components/FormsStructures";
import Footer from "../features/Authenication/AdminLoginComponent/Footer";
import Form from "../features/Authenication/AdminLoginComponent/Form";
import Header from "../features/Authenication/AdminLoginComponent/Header";

export default function AdminLogin() {
  return (
    <FormStructures>
      <Header />
      <Form />
      <Footer />
    </FormStructures>
  );
}
