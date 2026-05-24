export default function Students() {
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
        <h3 className="text-lg font-semibold text-[#4B403A]">Students</h3>

        <button className="text-sm text-[#7A6E66]">Manage</button>
      </div>

      <div className="space-y-3 mt-5">
        <div
          className="
            flex
            items-center
            justify-between
            bg-[#F8F5F2]
            border
            border-[#E3D5CA]
            rounded-2xl
            px-4
            py-3
          "
        >
          <div>
            <p className="text-sm font-medium text-[#4B403A]">Student Name</p>

            <p className="text-xs text-[#7A6E66]">Front-End Development</p>
          </div>

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
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
