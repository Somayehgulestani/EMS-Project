export default function OTP({ email, otp, setOtp }) {
  console.log(email);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <>
      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <input
            key={item}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            type="text"
            maxLength="1"
            id={`otp-${index}`}
            className="
                w-10
                h-12
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                text-center
                text-lg
                font-semibold
                text-[#4B403A]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/40
                focus:border-[#D7BDB0]
                transition-all
                duration-300
              "
          />
        ))}
      </div>
    </>
  );
}
