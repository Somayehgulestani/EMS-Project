import useChangeAcademicStatus from "../../../hooks/useChangeAcademicStatus";
import useChangePaymentStatus from "../../../hooks/useChangePaymentStatus";

export default function MobileLayout({
  students,
  handleStatusChange,
  handleChangePaymentStatus,
  fetchData,
  setErrorMessage,
  setLoader,
}) {
  const { changeAcademicStatus } = useChangeAcademicStatus({
    fetchData,
    handleStatusChange,
    setLoader,
    setErrorMessage,
  });
  const { changePaymentStatus } = useChangePaymentStatus({
    fetchData,
    handleChangePaymentStatus,
    setLoader,
    setErrorMessage,
  });

  return (
    <div className=" mt-6 space-y-4">
      {students.map((student) => (
        <div
          key={student.studentCode}
          className="
        bg-white/60
        backdrop-blur-xl
        border
        border-white/40
        rounded-[28px]
        shadow-md
        p-5
      "
        >
          {/* Student */}

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
              {student?.fullName?.charAt(0)}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-[#4B403A] truncate">
                {student?.fullName?.charAt(0).toUpperCase()}
                {student?.fullName?.slice(1)}
              </h3>

              <p className="text-xs text-[#7A6E66] mt-1 truncate">
                {student.email}
              </p>
            </div>
          </div>

          {/* Information */}

          <div className="mt-5 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#7A6E66]">Student ID</span>

              <span className="text-sm font-medium text-[#4B403A]">
                {student.studentCode}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-[#7A6E66]">Status</span>

              <span
                className="
              px-3
              py-1
              rounded-full
              bg-green-100
              
              text-xs
              font-semibold
            "
                style={{
                  backgroundColor:
                    student.academicStatus === "active" ? "#82e1a5" : "#db5a5a",
                }}
              >
                {student.academicStatus}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-[#7A6E66]">Payment</span>

              <span
                className="
              px-3
              py-1
              rounded-full
              bg-[#D7BDB0]/35
              text-[#4B403A]
              text-xs
              font-semibold
            "
              >
                {student.financialStatus}
              </span>
            </div>
          </div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button
              onClick={() =>
                changeAcademicStatus(student._id, student.academicStatus)
              }
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
              Change Status
            </button>

            <button
              onClick={() =>
                changePaymentStatus(student._id, student.financialStatus)
              }
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
              Change Payment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
