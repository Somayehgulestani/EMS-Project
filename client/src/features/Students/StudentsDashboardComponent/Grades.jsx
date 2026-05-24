export default function Grades() {
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
        <h3 className="text-lg font-semibold text-[#4B403A]">Grades</h3>

        <button className="text-sm text-[#7A6E66]">Details</button>
      </div>

      <div className="space-y-3 mt-5">
        <div
          className="
                    bg-[#F8F5F2]
                    border
                    border-[#E3D5CA]
                    rounded-2xl
                    p-4
                    flex
                    items-center
                    justify-between
                  "
        >
          <div>
            <p className="text-sm font-medium text-[#4B403A]">
              Front-End Development
            </p>

            <p className="text-xs text-[#7A6E66] mt-1">Midterm Exam</p>
          </div>

          <div
            className="
                      px-4
                      py-2
                      rounded-xl
                      bg-[#D7BDB0]
                      text-sm
                      font-semibold
                      text-[#4B403A]
                    "
          >
            95%
          </div>
        </div>

        <div
          className="
                    bg-[#F8F5F2]
                    border
                    border-[#E3D5CA]
                    rounded-2xl
                    p-4
                    flex
                    items-center
                    justify-between
                  "
        >
          <div>
            <p className="text-sm font-medium text-[#4B403A]">UI/UX Design</p>

            <p className="text-xs text-[#7A6E66] mt-1">Project Score</p>
          </div>

          <div
            className="
                      px-4 py-2
                      rounded-xl
                      bg-[#D7BDB0]
                      text-sm
                      font-semibold
                      text-[#4B403A]
                    "
          >
            90%
          </div>
        </div>
      </div>
    </div>
  );
}
