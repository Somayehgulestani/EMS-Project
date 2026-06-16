export default function Searchbar() {
  return (
    <div
      className="
          mx-auto
          bg-white/55
          backdrop-blur-xl
          border
          border-white/40
          rounded-[28px]
          shadow-[0_15px_40px_rgba(0,0,0,0.06)]
          px-5
          sm:px-6
          py-5
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
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#4B403A]">
            Users Management
          </h1>

          <p className="text-sm text-[#7A6E66] mt-1">
            Manage all registered users in the system
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full lg:max-w-[400px]">
          {/* Icon */}
          <div
            className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[#9B8F88]
                text-sm
              "
          >
            🔍
          </div>

          <input
            type="text"
            placeholder="Search users..."
            className="
                w-full
                h-[50px]

                rounded-2xl

                bg-[#F8F5F2]
                border
                border-[#E3D5CA]

                pl-11
                pr-4

                text-sm
                text-[#4B403A]
                placeholder:text-[#9B8F88]

                outline-none

                focus:ring-4
                focus:ring-[#D7BDB0]/30
                focus:border-[#D7BDB0]

                transition-all
                duration-300
              "
          />
        </div>
      </div>
    </div>
  );
}
