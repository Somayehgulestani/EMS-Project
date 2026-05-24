export default function NOtifications() {
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

      <div className="space-y-3 mt-5">
        <div
          className="
                    bg-[#F8F5F2]
                    border
                    border-[#E3D5CA]
                    rounded-2xl
                    p-4
                  "
        >
          <p className="text-sm font-medium text-[#4B403A]">New Assignment</p>

          <p className="text-xs text-[#7A6E66] mt-2">
            Submit your React project before Friday.
          </p>
        </div>

        <div
          className="
                    bg-[#F8F5F2]
                    border
                    border-[#E3D5CA]
                    rounded-2xl
                    p-4
                  "
        >
          <p className="text-sm font-medium text-[#4B403A]">
            Class Schedule Updated
          </p>

          <p className="text-xs text-[#7A6E66] mt-2">
            UI/UX class moved to 1:00 PM.
          </p>
        </div>
      </div>
    </div>
  );
}
