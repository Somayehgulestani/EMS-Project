import { useContext } from "react";
import useChangeAcademicStatus from "../../../hooks/Teachers/useChangeAcademicStatus";
import useGetTeacherById from "../../../hooks/Teachers/useGetTeacherById";
import DestopLayoutHeader from "./DestopLayoutHeader";
import { Link } from "react-router-dom";
import { TeachersContext } from "../../../context/TeachersContext";

export default function DesktopLayout({
  handleStatusChange,
  fetchData,
  setErrorMessage,
  setLoader,
}) {
  const { Teachers } = useContext(TeachersContext);

  const { changeAcademicStatus } = useChangeAcademicStatus({
    handleStatusChange,
    fetchData,
    setErrorMessage,
    setLoader,
  });
  const { handleViewProfile, singleTeacher } = useGetTeacherById({
    Teachers,
    setErrorMessage,
    setLoader,
  });
  console.log(singleTeacher);

  return (
    <div
      className="
    hidden
    lg:block                        
    mt-6
    bg-white/60
    backdrop-blur-xl
    border
    border-white/40
    rounded-[30px]
    shadow-[0_15px_40px_rgba(0,0,0,.05)]
    overflow-hidden
  "
    >
      {/* Header */}

      <DestopLayoutHeader />

      {/* Teachers */}

      {Teachers.map((teacher) => (
        <div
          key={teacher.instructorCode}
          className="
        grid
        grid-cols-[2.3fr_1.3fr_2fr_1.4fr_1.2fr_1fr_1fr_2fr]
        items-center
        gap-5
        px-6
        py-5
        border-b
        border-[#F2ECE7]
        hover:bg-[#FCFAF8]
        transition-all
      "
        >
          {/* Teacher */}

          <div className="flex items-center gap-4">
            <div
              className="
            w-12
            h-12
            rounded-2xl
            bg-[#D7BDB0]/35
            flex
            items-center
            justify-center
            text-[#4B403A]
            font-bold
            text-lg
          "
            >
              {teacher.fullName.charAt(0)}
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-[#4B403A] truncate">
                {teacher.fullName}
              </h3>

              <p className="text-xs text-[#7A6E66] mt-1">Senior Instructor</p>
            </div>
          </div>

          {/* ID */}

          <p
            className="
          text-sm
          text-[#4B403A]
          truncate
        "
          >
            {teacher.instructorCode}
          </p>

          {/* Email */}

          <p
            className="
          text-sm
          text-[#6D625B]
          truncate
        "
          >
            {teacher.email}
          </p>

          {/* Specialization */}

          <span
            className="
          px-3
          py-2
          rounded-xl
          bg-[#F8F5F2]
          border
          border-[#E3D5CA]
          text-xs
          font-medium
          text-[#4B403A]
          w-fit
        "
          >
            {teacher.specialization}
          </span>

          {/* Salary */}

          <span
            className="
          px-3
          py-2
          rounded-xl
          bg-[#F8F5F2]
          border
          border-[#E3D5CA]
          text-xs
          font-medium
          text-[#4B403A]
          w-fit
        "
          >
            {teacher.salaryType}
          </span>

          {/* Classes */}

          <p
            className="
          text-sm
          font-semibold
          text-[#4B403A]
        "
          >
            5
          </p>

          {/* Status */}

          <div className="flex items-center gap-2">
            <span
              className="
            inline-flex
            items-center
            gap-2
            px-3
            py-1.5
            rounded-full
            bg-green-100
            text-xs
            font-medium
          "
              style={{
                backgroundColor: teacher.isActive ? "#82e1a5" : "#e06969",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: teacher.isActive ? "#1aaa4f" : "#b92c2c",
                }}
              ></span>
              {teacher.isActive ? "Active" : "Inactive"}
            </span>
          </div>

          {/* Actions */}

          <div className="flex justify-end gap-3">
            <Link to="/TeacherProfile">
              <button
                onClick={() => handleViewProfile(teacher._id)}
                className="
            px-4
            py-2
            rounded-xl
            bg-[#F8F5F2]
            border
            border-[#D6CCC2]
            text-[#4B403A]
            text-xs
            font-semibold
            hover:bg-[#EEE5DD]
            transition-all
          "
              >
                View Profile
              </button>
            </Link>

            <button
              onClick={() =>
                changeAcademicStatus(teacher._id, teacher.isActive)
              }
              className="
            px-4
            py-2
            rounded-xl
            bg-[#D7BDB0]
            hover:bg-[#CDB1A3]
            text-[#4B403A]
            text-xs
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
