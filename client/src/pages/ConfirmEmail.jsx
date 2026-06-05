import { useState } from "react";
import FormStructures from "../components/FormsStructures";
import Footer from "../features/Authenication/ConfirmEmailComponent/Footer";
import Header from "../features/Authenication/ConfirmEmailComponent/Header";
import Icon from "../features/Authenication/ConfirmEmailComponent/Icon";
import OTP from "../features/Authenication/ConfirmEmailComponent/OTP";
import Timer from "../features/Authenication/ConfirmEmailComponent/Timer";
import VerifyBottom from "../features/Authenication/ConfirmEmailComponent/VerifyEmail";

export default function ConfirmEmail() {
  const [timer, setTimer] = useState(9);
  return (
    <FormStructures>
      <Icon />
      <Header />
      <OTP />
      <Timer timer={timer} setTimer={setTimer} />
      <VerifyBottom timer={timer} setTimer={setTimer} />
      <Footer timer={timer} setTimer={setTimer} />
    </FormStructures>
  );
}
