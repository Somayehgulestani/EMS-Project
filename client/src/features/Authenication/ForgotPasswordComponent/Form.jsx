export default function Form() {
  return (
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
                px-3
                py-2
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-3
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
                px-3
                py-2
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-3
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
  );
}
