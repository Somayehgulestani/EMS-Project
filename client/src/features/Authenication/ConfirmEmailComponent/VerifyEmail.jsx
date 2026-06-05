export default function VerifyBottom({ timer }) {
  return (
    timer > 0 && (
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
    )
  );
}
