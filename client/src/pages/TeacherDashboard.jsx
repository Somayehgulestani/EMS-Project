export default function TeacherDashboard() {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9]">
      {/* Sidebar */}
      <aside
        className="
          hidden
          md:flex
          w-[235px]
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
          <h1 className="text-2xl font-bold text-[#4B403A]">Teacher Panel</h1>

          <p className="text-xs text-[#7A6E66] mt-1">
            Education Management System
          </p>
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
              text-sm
              font-medium
              text-[#6D625B]
              hover:bg-[#F8F5F2]
              transition-all
            "
          >
            My Classes
          </button>

          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              text-sm
              font-medium
              text-[#6D625B]
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
              text-sm
              font-medium
              text-[#6D625B]
              hover:bg-[#F8F5F2]
              transition-all
            "
          >
            Salary
          </button>

          <button
            className="
              w-full
              flex
              items-center
              px-4
              py-3
              rounded-2xl
              text-sm
              font-medium
              text-[#6D625B]
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
              text-sm
              font-medium
              text-[#6D625B]
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
          <p className="text-sm font-semibold text-[#4B403A]">
            Teacher Dashboard
          </p>

          <p className="text-xs text-[#7A6E66] mt-1">
            Manage your classes and students
          </p>
        </div>
      </aside>

      {/* Main Content */}
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
          "
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#4B403A]">
              Welcome Back
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6E66] mt-1">
              Here’s your teaching overview
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
            👨🏻‍🏫
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
            <p className="text-sm text-[#7A6E66]">My Classes</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">6</h3>
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
            <p className="text-sm text-[#7A6E66]">Students</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">142</h3>
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
            <p className="text-sm text-[#7A6E66]">Salary</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">$1,850</h3>
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
            <p className="text-sm text-[#7A6E66]">Announcements</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">12</h3>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 mt-5">
          {/* Left */}
          <div className="xl:col-span-8 space-y-5">
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
                  My Classes
                </h3>

                <button className="text-sm text-[#7A6E66]">View All</button>
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
                    Open Class
                  </button>
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
                  <h4 className="text-sm font-semibold text-[#4B403A]">
                    UI/UX Design
                  </h4>

                  <p className="text-xs text-[#7A6E66] mt-2">18 Students</p>

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
                    Open Class
                  </button>
                </div>
              </div>
            </div>

            {/* Students */}
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
                  Students
                </h3>

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
                    <p className="text-sm font-medium text-[#4B403A]">
                      Student Name
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

            {/* Contact Admin */}
            {/* Contact Admin */}
            <div
              className="
    bg-white/50
    backdrop-blur-xl
    border
    border-white/40
    rounded-[24px]
    p-4
    shadow-md
  "
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-[#4B403A]">
                  Contact Admin
                </h3>

                <div
                  className="
        w-8
        h-8
        rounded-xl
        bg-[#D7BDB0]/40
        flex
        items-center
        justify-center
      "
                >
                  💬
                </div>
              </div>

              <p className="text-[11px] text-[#7A6E66] mt-1.5 leading-relaxed">
                Send requests or report issues directly to the admin.
              </p>

              {/* Message Input */}
              <div className="mt-4">
                <textarea
                  placeholder="Write your message..."
                  className="
        w-full
        h-20
        resize-none
        rounded-2xl
        bg-[#F8F5F2]
        border
        border-[#E3D5CA]
        px-3
        py-2.5
        text-sm
        text-[#4B403A]
        placeholder:text-[#9B8F88]
        outline-none
        focus:ring-4
        focus:ring-[#D7BDB0]/30
        transition-all
      "
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 mt-3">
                <button
                  className="
        flex-1
        py-2
        rounded-xl
        bg-[#D7BDB0]
        hover:bg-[#CDB1A3]
        text-[#4B403A]
        text-sm
        font-semibold
        shadow-sm
        transition-all
      "
                >
                  Send
                </button>

                <button
                  className="
        px-3
        py-2
        rounded-xl
        border
        border-[#D7BDB0]
        text-[#6D625B]
        text-xs
        font-medium
        hover:bg-[#F8F5F2]
        transition-all
      "
                >
                  History
                </button>
              </div>

              {/* Status */}
              <div
                className="
      mt-4
      flex
      items-center
      justify-between
      bg-[#F8F5F2]
      border
      border-[#E3D5CA]
      rounded-2xl
      px-3
      py-2.5
    "
              >
                <div>
                  <p className="text-xs font-medium text-[#4B403A]">
                    Admin Support
                  </p>

                  <p className="text-[11px] text-[#7A6E66] mt-0.5">
                    Usually replies within 1 hour
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>

                  <span className="text-[11px] font-medium text-[#4B403A]">
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="xl:col-span-4 space-y-5">
            {/*Notifications */}
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
                  Notifications
                </h3>

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

            {/* Curriculum */}
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
                Curriculum
              </h3>

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

                  <p className="text-xs text-[#7A6E66] mt-2">
                    12 Lessons Available
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
                    UI Design Curriculum
                  </p>

                  <p className="text-xs text-[#7A6E66] mt-2">
                    8 Lessons Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
