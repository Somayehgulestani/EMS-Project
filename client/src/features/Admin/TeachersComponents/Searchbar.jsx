export default function Searchbar() {
  return (
    <div
      className="
            bg-white/60
            backdrop-blur-xl
            border
            border-white/40
            rounded-[30px]
            shadow-[0_15px_40px_rgba(0,0,0,.05)]
            p-5
            sm:p-6
          "
    >
      <div
        className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-5
            "
      >
        {/* Left */}

        <div>
          <h1 className="text-3xl font-bold text-[#4B403A]">
            Students Management
          </h1>

          <p className="mt-2 text-sm text-[#7A6E66]">
            View and manage all students in your institute
          </p>
        </div>

        {/* Search */}

        <div className="relative w-full lg:w-[370px]">
          <span
            className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#9B8F88]
                "
          >
            🔍
          </span>

          <input
            type="text"
            placeholder="Search students..."
            className="
        w-full
        h-[52px]
        rounded-2xl
        bg-[#F8F5F2]
        border
        border-[#E3D5CA]
        pl-11
        pr-4
        text-sm
        outline-none
        focus:ring-4
        focus:ring-[#D7BDB0]/30
        focus:border-[#D7BDB0]
        transition-all
                "
          />
        </div>
      </div>
    </div>
  );
}
