export default function Curriculum() {
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
      <h3 className="text-lg font-semibold text-[#4B403A]">Curriculum</h3>

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
          <p className="text-sm font-medium text-[#4B403A]">
            Front-End Curriculum
          </p>

          <p className="text-xs text-[#7A6E66] mt-2">12 Lessons Available</p>
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
            UI Design Curriculum
          </p>

          <p className="text-xs text-[#7A6E66] mt-2">8 Lessons Available</p>
        </div>
      </div>
    </div>
  );
}
