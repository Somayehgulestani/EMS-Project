export default function RoleSelection() {
  const roles = [
    {
      title: "Admin",
      description: "Manage institute system and settings",
      color: "#D7BDB0",
    },
    {
      title: "Teacher",
      description: "Handle classes, attendance and grading",
      color: "#E3D5CA",
    },
    {
      title: "Student",
      description: "Access courses, assignments and results",
      color: "#eeddce",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4B403A]">
            Welcome
          </h1>

          <p className="mt-4 text-[#7A6E66] text-sm md:text-base max-w-xl mx-auto">
            Select your role to continue or sign in if you already have an
            account.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="
                group
                rounded-[35px]
                p-7
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-2
                cursor-pointer
                border border-white/40
                backdrop-blur-sm
              "
              style={{ backgroundColor: role.color }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center shadow-md mb-6">
                <span className="text-2xl font-bold text-[#5E524B]">
                  {role.title.charAt(0)}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-[#4B403A]">
                {role.title}
              </h2>

              {/* Description */}
              <p className="mt-3 text-[#6D625B] leading-relaxed text-sm">
                {role.description}
              </p>

              {/* Button */}
              <button
                className="
                  mt-8
                  w-full
                  py-3
                  rounded-2xl
                  bg-white/70
                  hover:bg-white
                  text-[#4B403A]
                  font-semibold
                  transition-all
                  duration-300
                  shadow-md
                "
              >
                Continue
              </button>
            </div>
          ))}
        </div>

        {/* Login Section */}
        <div className="mt-14 flex flex-col items-center">
          <p className="text-[#7A6E66] mb-5 text-sm md:text-base">
            Already selected a role?
          </p>

          <button
            className="
              relative
              overflow-hidden
              px-10
              py-4
              rounded-2xl
              bg-[#bfbbb6]
              text-[#4B403A]
              font-semibold
              text-lg
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-2xl
              border border-white/40
              group
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              Sign In To Your Account
            </span>

            {/* Glow Effect */}
            <div
              className="
                absolute
                inset-0
                bg-white/20
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
}
