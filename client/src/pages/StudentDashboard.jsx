export default function StudentDashboard() {
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
          <h1 className="text-2xl font-bold text-[#4B403A]">Student Panel</h1>

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
            Grades
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
            Contact Admin
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
            Settings
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
            Student Dashboard
          </p>

          <p className="text-xs text-[#7A6E66] mt-1">
            Track your classes and progress
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
              Here’s your learning overview
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
            🎓
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
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

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">5</h3>
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
            <p className="text-sm text-[#7A6E66]">Average Grade</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">92%</h3>
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
            <p className="text-sm text-[#7A6E66]">Assignments</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">14</h3>
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
            <p className="text-sm text-[#7A6E66]">Notifications</p>

            <h3 className="text-3xl font-bold text-[#4B403A] mt-2">8</h3>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5">
          {/* Left Section */}
          <div className="xl:col-span-2 space-y-5">
            {/* My Classes */}
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

                  <p className="text-xs text-[#7A6E66] mt-2">
                    Monday • 9:00 AM
                  </p>

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

                  <p className="text-xs text-[#7A6E66] mt-2">
                    Wednesday • 11:00 AM
                  </p>

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

            {/* Grades */}
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
                    <p className="text-sm font-medium text-[#4B403A]">
                      UI/UX Design
                    </p>

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
          </div>

          {/* Right Section */}
          <div className="space-y-5">
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
              <h3 className="text-lg font-semibold text-[#4B403A]">
                Notifications
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
                    New Assignment
                  </p>

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

            {/* Contact Admin */}
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
                Contact Admin
              </h3>

              <p className="text-xs text-[#7A6E66] mt-2 leading-relaxed">
                Send questions or issues directly to the administration.
              </p>

              <textarea
                placeholder="Write your message..."
                className="
                  w-full
                  h-28
                  mt-4
                  resize-none
                  rounded-2xl
                  bg-[#F8F5F2]
                  border
                  border-[#E3D5CA]
                  px-4
                  py-3
                  text-sm
                  text-[#4B403A]
                  placeholder:text-[#9B8F88]
                  outline-none
                  focus:ring-4
                  focus:ring-[#D7BDB0]/30
                "
              />

              <button
                className="
                  w-full
                  mt-4
                  py-2.5
                  rounded-xl
                  bg-[#D7BDB0]
                  text-[#4B403A]
                  text-sm
                  font-semibold
                  shadow-md
                  hover:bg-[#CDB1A3]
                  transition-all
                "
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
