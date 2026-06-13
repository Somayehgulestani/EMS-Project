export default function Footer() {
  return (
    <div
      className="
            mt-5
            bg-[#F8F5F2]
            border
            border-[#E3D5CA]
            rounded-2xl
            px-4
            py-3
            flex
            items-center
            gap-3
            relative
            z-10
          "
    >
      <div
        className="
              w-9
              h-9
              rounded-xl
              bg-[#D7BDB0]/40
              flex
              items-center
              justify-center
              text-sm
            "
      >
        🔐
      </div>

      <div>
        <p className="text-sm font-medium text-[#4B403A]">
          Secure Authentication
        </p>

        <p className="text-[11px] text-[#7A6E66] mt-0.5">
          Protected admin-only access
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}
