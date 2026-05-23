export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] px-4 py-6">
      <div
        className="
          w-full
          max-w-md
          bg-white/50
          backdrop-blur-xl
          border border-white/40
          shadow-2xl
          rounded-[30px]
          p-6 md:p-7
        "
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#4B403A]">Create Account</h1>

          <p className="mt-2 text-[#7A6E66] text-sm">
            Join the platform and get started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-[#5E524B] font-medium text-sm">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/40
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-[#5E524B] font-medium text-sm">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/40
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-[#5E524B] font-medium text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/40
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-[#5E524B] font-medium text-sm">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/40
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-xl
              bg-[#D7BDB0]
              hover:bg-[#CDB1A3]
              text-[#4B403A]
              font-semibold
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-1
              mt-2
            "
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-[#7A6E66] mt-6">
          Already have an account?{" "}
          <span className="font-semibold text-[#4B403A] cursor-pointer hover:underline">
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
