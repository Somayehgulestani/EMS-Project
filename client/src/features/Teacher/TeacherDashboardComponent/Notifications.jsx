export default function Notifications() {
  return (
    <div
      className="
        bg-white/50
        backdrop-blur-xl
        border
        border-white/40
        rounded-[24px]
        p-5
        shadow-md
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#4B403A]">Notifications</h3>

        <button
          className="
            px-3
            py-1.5
            rounded-xl
            bg-[#D7BDB0]
            text-xs
            font-medium
            text-[#4B403A]
          "
        >
          Create
        </button>
      </div>

      <div
        className="
          mt-5
          bg-[#F8F5F2]
          border
          border-[#E3D5CA]
          rounded-2xl
          p-4
        "
      >
        <p className="text-sm font-medium text-[#4B403A]">
          New Schedule Update
        </p>

        <p className="text-xs text-[#7A6E66] mt-2">
          Tomorrow's class starts at 9:00 AM.
        </p>
      </div>
    </div>
  );
}
