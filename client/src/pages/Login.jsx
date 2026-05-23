export default function Login() {
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
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#4B403A]">
            Welcome Back
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-[#7A6E66]">
            Login to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1.5 text-[#5E524B] font-medium text-xs sm:text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
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

          {/* Password */}
          <div>
            <label className="block mb-1.5 text-[#5E524B] font-medium text-xs sm:text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
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

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <label className="flex items-center gap-2 text-[#6D625B] cursor-pointer">
              <input type="checkbox" className="accent-[#D7BDB0] w-3.5 h-3.5" />
              Remember me
            </label>

            <button
              type="button"
              className="
                text-[#8B7E77]
                hover:text-[#4B403A]
                transition-colors
                duration-300
              "
            >
              Forgot?
            </button>
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
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs sm:text-sm text-[#7A6E66] mt-6">
          Don’t have an account?{" "}
          <span className="font-semibold text-[#4B403A] cursor-pointer hover:underline">
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}
