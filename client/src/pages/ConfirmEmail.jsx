import { useState } from "react";
import { useLocation } from "react-router-dom";
import FormStructures from "../components/FormsStructures";
import Footer from "../features/Authenication/ConfirmEmailComponent/Footer";
import Header from "../features/Authenication/ConfirmEmailComponent/Header";
import Icon from "../features/Authenication/ConfirmEmailComponent/Icon";
import OTP from "../features/Authenication/ConfirmEmailComponent/OTP";
import Timer from "../features/Authenication/ConfirmEmailComponent/Timer";
import VerifyEmail from "../features/Authenication/ConfirmEmailComponent/VerifyEmail";

export default function ConfirmEmail() {
  const location = useLocation();
  const email = location.state?.email;
  const [timer, setTimer] = useState(59);

  const [otp, setOtp] = useState([]);
  console.log(otp.length);

  const response = async () => {
    const res = await fetch("http://localhost:5000/api/v1/auth/verify-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        code: otp.join(""),
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <FormStructures>
      <Icon />
      <Header />
      <OTP email={email} response={response} otp={otp} setOtp={setOtp} />
      <Timer timer={timer} setTimer={setTimer} />
      <VerifyEmail timer={timer} response={response} />
      <Footer timer={timer} setTimer={setTimer} />
    </FormStructures>
  );
}
