export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] px-4 py-6">
      <div
        className="
          w-full
          max-w-sm
          bg-white/50
          backdrop-blur-xl
          border border-white/40
          shadow-xl
          rounded-[26px]
          p-5 sm:p-6
        "
      >
        {/* Lock Icon */}
        <div className="flex justify-center mb-4">
          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-[#D7BDB0]/40
              flex
              items-center
              justify-center
              shadow-md
            "
          >
            <span className="text-3xl">🔒</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#4B403A]">
            Reset Password
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-[#7A6E66] leading-relaxed">
            Create a new secure password
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* New Password */}
          <div>
            <label className="block mb-1.5 text-[#5E524B] font-medium text-xs sm:text-sm">
              New Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              className="
                w-full
                px-4
                py-2.5
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/30
                text-sm
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1.5 text-[#5E524B] font-medium text-xs sm:text-sm">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="
                w-full
                px-4
                py-2.5
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/30
                text-sm
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full
              py-2.5
              rounded-xl
              bg-[#D7BDB0]
              hover:bg-[#CDB1A3]
              text-[#4B403A]
              font-semibold
              text-sm
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Update Password
          </button>
        </form>
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
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
