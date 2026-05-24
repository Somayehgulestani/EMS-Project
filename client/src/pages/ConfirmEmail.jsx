import Icon from "../features/ConfirmEmail/ConfirmEmailComponent/Icon";

export default function ConfirmEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] px-4">
      <div
        className="
          w-full
          max-w-sm
          bg-white/50
          backdrop-blur-xl
          border border-white/40
          shadow-xl
          rounded-2xl
          p-5
        "
      >
        {/* Icon */}
        <Icon />

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#4B403A]">Confirm Email</h1>

          <p className="mt-2 text-xs text-[#7A6E66] leading-relaxed">
            Enter the 6-digit verification code sent to your email address
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2 mt-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <input
              key={item}
              type="text"
              maxLength="1"
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

        {/* Timer */}
        <div className="text-center mt-4">
          <p className="text-xs text-[#7A6E66]">
            Resend code in{" "}
            <span className="font-semibold text-[#4B403A]">00:59</span>
          </p>
        </div>

        {/* Verify Button */}
        <button
          className="
            w-full
            mt-5
            py-2.5
            rounded-xl
            bg-[#D7BDB0]
            hover:bg-[#CDB1A3]
            text-[#4B403A]
            font-semibold
            text-base
            shadow-md
            hover:shadow-lg
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
        >
          Verify Email
        </button>

        {/* Footer */}
        <div className="text-center mt-5">
          <button
            className="
              text-xs
              font-medium
              text-[#6D625B]
              hover:text-[#4B403A]
              transition-colors
              duration-300
            "
          >
            Didn’t receive the code?
          </button>
        </div>
      </div>
    </div>
  );
}
