export default function DesktopLayout({
  students,
  handleStatusChange,
  handleChangePaymentStatus,
  setErrorMessage,
  setLoader,
}) {
  const Token = sessionStorage.getItem("Token");

  async function changeAcademicStatus(id, currentStatus) {
    setLoader(true);
    const changeStatus = currentStatus === "active" ? "inactive" : "active";
    handleStatusChange(id, currentStatus);

    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/students/${id} `,
        {
          method: "PATCH",
          headers: {
            Authorization: Token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            academicStatus: changeStatus,
          }),
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setErrorMessage(error.messages);
    } finally {
      setLoader(false);
    }
  }

  async function changePaymentStatus(id, currentStatus) {
    setLoader(true);
    const changeStatus = currentStatus === "paid" ? "unpaid" : "paid";
    handleChangePaymentStatus(id, currentStatus);

    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/students/${id} `,
        {
          method: "PATCH",
          headers: {
            Authorization: Token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            financialStatus: changeStatus,
          }),
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setErrorMessage(error.messages);
    } finally {
      setLoader(false);
    }
  }

  return (
    <div
      className="
   block
    bg-white/60
    backdrop-blur-xl
    border
    border-white/40
    shadow-[0_15px_40px_rgba(0,0,0,.05)]
    overflow-hidden
  "
    >
      {students.map((student) => {
        return (
          <div
            key={student.studentCode}
            className="
        grid
        grid-cols-[2.3fr_1.7fr_2.2fr_2fr_1.2fr_2fr_2fr]
        gap-6
        items-center
        px-6
        py-5
        border-b
        border-[#F1ECE6]
        hover:bg-[#FCFAF8]
        transition-all
      "
          >
            {/* Student */}

            <div className="flex items-center gap-4">
              <h3 className="text-sm font-semibold text-[#4B403A]">
                {student?.fullName?.charAt(0).toUpperCase()}
                {student?.fullName?.slice(1)}
              </h3>
            </div>

            {/* ID */}

            <p
              className="
          text-sm
          text-[#4B403A]
          truncate
        "
            >
              {student.studentCode}
            </p>

            {/* Email */}

            <p
              className="
          text-sm
          text-[#6D625B]
          truncate
        "
            >
              {student.email}
            </p>

            {/* phone */}
            <p
              className="
          text-sm
          text-[#6D625B]
          truncate
        "
            >
              {student.phone}
            </p>
            {/* Status */}

            <div>
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
                  backgroundColor:
                    student.academicStatus === "active" ? "#82e1a5" : "#e06969",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor:
                      student.academicStatus === "active"
                        ? "#1aaa4f"
                        : "#b92c2c",
                  }}
                ></span>
                {student.academicStatus}
              </span>
            </div>

            {/* Payment */}

            <div>
              <span
                className="
            inline-flex
            items-center
            gap-2
            px-3
            py-1.5
            rounded-full
            bg-[#D7BDB0]/30
            text-[#4B403A]
            text-xs
            font-medium
          "
              >
                {student.financialStatus}
              </span>
            </div>

            {/* Actions */}

            <div className="flex justify-end gap-3">
              <button
                onClick={() =>
                  changeAcademicStatus(student._id, student.academicStatus)
                }
                className="
            px-4
            py-2
            rounded-xl
            border
            border-[#D6CCC2]
            bg-[#F8F5F2]
            hover:bg-[#EFE7DF]
            text-[#4B403A]
            text-xs
            font-semibold
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
                Change Payment
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
