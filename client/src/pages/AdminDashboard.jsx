export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9]">
      {/* Sidebar */}
      <aside
        className="
          hidden
          md:flex
          w-[240px]
          flex-col
          bg-white/50
          backdrop-blur-xl
          border-r
          border-white/40
          shadow-lg
          px-4
          py-5
        "
      >
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#4B403A]">EMS Admin</h1>

          <p className="text-xs text-[#7A6E66] mt-1">Management Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              bg-[#D7BDB0]
              text-[#4B403A]
              text-sm
              font-medium
              shadow-md
            "
          >
            Dashboard
          </button>

          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              text-[#6D625B]
              text-sm
              font-medium
              hover:bg-[#F8F5F2]
              transition-all
            "
          >
            Teachers
          </button>

          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              text-[#6D625B]
              text-sm
              font-medium
              hover:bg-[#F8F5F2]
              transition-all
            "
          >
            Students
          </button>

          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              text-[#6D625B]
              text-sm
              font-medium
              hover:bg-[#F8F5F2]
              transition-all
            "
          >
            Classes
          </button>

          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              text-[#6D625B]
              text-sm
              font-medium
              hover:bg-[#F8F5F2]
              transition-all
            "
          >
            Courses
          </button>

          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              text-[#6D625B]
              text-sm
              font-medium
              hover:bg-[#F8F5F2]
              transition-all
            "
          >
            Finance
          </button>

          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              text-[#6D625B]
              text-sm
              font-medium
              hover:bg-[#F8F5F2]
              transition-all
            "
          >
            Notifications
          </button>

          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              text-[#6D625B]
              text-sm
              font-medium
              hover:bg-[#F8F5F2]
              transition-all
            "
          >
            Curriculum
          </button>
        </nav>

        {/* Bottom Card */}
        <div
          className="
            mt-auto
            bg-[#F8F5F2]
            border
            border-[#E3D5CA]
            rounded-2xl
            p-4
          "
        >
          <p className="text-sm font-semibold text-[#4B403A]">Admin Panel</p>

          <p className="text-xs text-[#7A6E66] mt-1">
            Manage your education system
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 sm:p-5">
        {/* Topbar */}
        <div
          className="
            bg-white/50
            backdrop-blur-xl
            border
            border-white/40
            rounded-[24px]
            px-4
            py-4
            shadow-md
            flex
            items-center
            justify-between
            gap-3
          "
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#4B403A]">
              Dashboard
            </h2>

            <p className="text-xs sm:text-sm text-[#7A6E66] mt-1">
              Welcome back Admin
            </p>
          </div>

          <div
            className="
              w-10
              h-10
              rounded-2xl
              bg-[#D7BDB0]/40
              flex
              items-center
              justify-center
              text-lg
            "
          >
            👩🏻‍💼
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
          {/* Card */}
          <div
            className="
              bg-white/50
              backdrop-blur-xl
              border
              border-white/40
              rounded-[22px]
              p-4
              shadow-md
            "
          >
            <p className="text-sm text-[#7A6E66]">Total Students</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">1,245</h3>
          </div>

          <div
            className="
              bg-white/50
              backdrop-blur-xl
              border
              border-white/40
              rounded-[22px]
              p-4
              shadow-md
            "
          >
            <p className="text-sm text-[#7A6E66]">Teachers</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">48</h3>
          </div>

          <div
            className="
              bg-white/50
              backdrop-blur-xl
              border
              border-white/40
              rounded-[22px]
              p-4
              shadow-md
            "
          >
            <p className="text-sm text-[#7A6E66]">Active Classes</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">32</h3>
          </div>

          <div
            className="
              bg-white/50
              backdrop-blur-xl
              border
              border-white/40
              rounded-[22px]
              p-4
              shadow-md
            "
          >
            <p className="text-sm text-[#7A6E66]">Revenue</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">$12.5K</h3>
          </div>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5">
          {/* Left */}
          <div className="xl:col-span-2 space-y-5">
            {/* Teachers */}
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
                <h3 className="text-lg font-semibold text-[#4B403A]">
                  Teachers
                </h3>

                <button className="text-sm text-[#7A6E66]">View All</button>
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
                    <p className="text-sm font-medium text-[#4B403A]">
                      Teacher Name
                    </p>

                    <p className="text-xs text-[#7A6E66]">
                      Front-End Development
                    </p>
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

            {/* Classes */}
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
                <h3 className="text-lg font-semibold text-[#4B403A]">
                  Classes
                </h3>

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
          </div>

          {/* Right */}
          <div className="space-y-5">
            {/* Announcements */}
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
              <h3 className="text-lg font-semibold text-[#4B403A]">
                Notifications
              </h3>
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
                  New Course Added
                </p>

                <p className="text-xs text-[#7A6E66] mt-2">
                  React course has been published.
                </p>
              </div>
            </div>

            {/* Finance */}
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
              <h3 className="text-lg font-semibold text-[#4B403A]">Finance</h3>

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
                <p className="text-sm text-[#7A6E66]">Monthly Revenue</p>

                <h2 className="text-3xl font-bold text-[#4B403A] mt-2">
                  $12,540
                </h2>

                <div className="w-full h-2.5 bg-[#E3D5CA] rounded-full mt-4 overflow-hidden">
                  <div className="w-[70%] h-full bg-[#D7BDB0] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
