export default function Classes() {
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
        <h3 className="text-lg font-semibold text-[#4B403A]">Classes</h3>

        <button className="text-sm text-[#7A6E66]">Manage</button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-5">
        <div
          className="
                    bg-[#F8F5F2]
                    border
                    border-[#E3D5CA]
                    rounded-2xl
                    p-4
                  "
        >
          <h4 className="text-sm font-semibold text-[#4B403A]">
            React Development
          </h4>

          <p className="text-xs text-[#7A6E66] mt-2">24 Students</p>

          <button
            className="
                      mt-4
                      px-4
                      py-2
                      rounded-xl
                      bg-[#D7BDB0]
                      text-xs
                      font-medium
                      text-[#4B403A]
                    "
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
}
