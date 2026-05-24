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
      <h3 className="text-lg font-semibold text-[#4B403A]">Notifications</h3>
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
        <p className="text-sm font-medium text-[#4B403A]">New Course Added</p>

        <p className="text-xs text-[#7A6E66] mt-2">
          React course has been published.
        </p>
      </div>
    </div>
  );
}
