import { useContext } from "react";
import { TeachersContext } from "../../../context/TeachersManagementContext";

export default function MobileLayout() {
  const { Teachers } = useContext(TeachersContext);

  return (
    <div className="lg:hidden mt-6 space-y-4">
      {Teachers.map((teacher) => (
        <div
          key={teacher}
          className="
        bg-white/60
        backdrop-blur-xl
        border
        border-white/40
        rounded-[28px]
        shadow-[0_12px_30px_rgba(0,0,0,.05)]
        p-5
      "
        >
          {/* Teacher */}

          <div className="flex items-center gap-4">
            <div
              className="
            w-14
            h-14
            rounded-2xl
            bg-[#D7BDB0]/35
            flex
            items-center
            justify-center
            text-lg
            font-bold
            text-[#4B403A]
            uppercase
          "
            >
              {teacher?.fullName?.charAt(0)}
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-[#4B403A] truncate">
                {teacher?.fullName?.charAt(0).toUpperCase()}
                {teacher?.fullName?.slice(1)}
              </h2>

              <p className="text-xs text-[#7A6E66] truncate mt-1">
                {teacher.email}
              </p>
            </div>
          </div>

          {/* Information */}

          <div className="mt-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#7A6E66]">Teacher ID</span>

              <span className="text-sm font-medium text-[#4B403A]">
                {teacher.instructorCode}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-[#7A6E66]">Specialization</span>

              <span
                className="
              px-3
              py-1
              rounded-full
              bg-[#F8F5F2]
              border
              border-[#E3D5CA]
              text-xs
              font-medium
              text-[#4B403A]
            "
              >
                {teacher.specialization}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-[#7A6E66]">Salary</span>

              <span
                className="
              px-3
              py-1
              rounded-full
              bg-[#F8F5F2]
              border
              border-[#E3D5CA]
              text-xs
              font-medium
              text-[#4B403A]
            "
              >
                {teacher.salaryType}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-[#7A6E66]">Classes</span>

              <span className="text-sm font-semibold text-[#4B403A]">
                5 Classes
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-[#7A6E66]">Status</span>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>

                <span className="text-sm font-medium text-[#4B403A]">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div className="h-px bg-[#E8DDD3] my-5"></div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-3">
            <button
              className="
            h-11
            rounded-xl
            bg-[#F8F5F2]
            border
            border-[#E3D5CA]
            text-[#4B403A]
            text-sm
            font-semibold
            hover:bg-[#EFE7DF]
            transition-all
          "
            >
              View Profile
            </button>

            <button
              className="
            h-11
            rounded-xl
            bg-[#D7BDB0]
            hover:bg-[#CDB1A3]
            text-[#4B403A]
            text-sm
            font-semibold
            transition-all
          "
            >
              Disable
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
