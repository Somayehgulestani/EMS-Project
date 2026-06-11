export default function SuccessMessage({ successMessage }) {
  return (
    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/10
        backdrop-blur-[2px]

        px-4

        animate-[fadeOverlay_.4s_ease]
      "
    >
      <div
        className="
          w-full
          max-w-sm

          rounded-[28px]

          border
          border-[#C9D8C5]

          bg-[#FCFFFA]/95
          backdrop-blur-xl

          shadow-[0_20px_50px_rgba(120,160,120,0.12)]

          px-6
          py-7

          text-center

          animate-[successPopup_.55s_cubic-bezier(0.22,1,0.36,1)]
        "
      >
        {/* Success Icon */}
        <div className="flex justify-center">
          <div
            className="
              relative

              w-[72px]
              h-[72px]

              rounded-[24px]

              bg-[#DDE8D8]

              flex
              items-center
              justify-center
            "
          >
            {/* Soft Ring */}
            <span
              className="
                absolute
                inset-0
                rounded-[24px]
                border
                border-[#B7D0B0]
                animate-ping
                opacity-30
              "
            />

            <span className="relative text-3xl text-[#5F8A5A]">✓</span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          {/* <h2
            className="
              text-xl
              font-bold
              text-[#4B403A]
            "
          >
            {}
          </h2> */}

          <p
            className="
              text-sm
              text-[#7A6E66]
              leading-relaxed
              mt-2
            "
          >
            {successMessage}
          </p>
        </div>

        {/* Button */}
        <button
          className="
            mt-6
            w-full

            py-3

            rounded-2xl

            bg-[#D7BDB0]
            hover:bg-[#CDB1A3]

            text-[#4B403A]
            font-semibold
            text-sm

            transition-all
            duration-300

            shadow-md
            hover:shadow-xl
          "
        >
          Continue
        </button>
      </div>
    </div>
  );
}
