import { useContext, useState } from "react";
import { TeachersContext } from "../../../context/TeachersManagementContext";
import useChangeSpecializationStatus from "../../../hooks/Teachers/useChangeSpecialization";

export default function Information({ setLoader, setErrorMessage }) {
  const [changeSpecialization, setChangeSpecialization] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { singleTeacher } = useContext(TeachersContext);
  const { Teachers, setTeachers } = useContext(TeachersContext);

  function handleStatusChange(id, inputValue) {
    if (inputValue.trim() === "") return;
    setTeachers(
      Teachers.map((Teacher) =>
        Teacher._id === id
          ? { ...Teacher, specialization: inputValue }
          : Teacher,
      ),
    );
  }

  const { changeSpecializationStatus } = useChangeSpecializationStatus({
    setLoader,
    setErrorMessage,
    inputValue,
    handleStatusChange,
  });

  return (
    <div className="mt-10 space-y-3.5 text-sm ">
      <div className="flex justify-between ">
        <span className="text-[#7A6E66]">Teacher ID</span>
        <span className="font-medium text-[#4B403A]">
          {singleTeacher.instructorCode}
        </span>
      </div>

      <div className="border-t border-[#ECE2DA]" />

      <div className="flex justify-between ">
        <span className="text-[#7A6E66]">Email</span>

        <span className="text-[#4B403A]">{singleTeacher.email}</span>
      </div>

      <div className="border-t border-[#ECE2DA]" />

      <div className="flex items-center justify-between gap-3">
        {!changeSpecialization && (
          <span className="text-[#7A6E66]">Specialization</span>
        )}

        <div className="flex items-center justify-between gap-3 w-full ">
          {changeSpecialization ? (
            <input
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1  px-3
                py-2
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-3
                focus:ring-[#D7BDB0]/30
                text-sm
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300 "
            ></input>
          ) : (
            <span className="text-[#4B403A]">
              {singleTeacher.specialization}
            </span>
          )}

          <button
            onClick={() => {
              changeSpecializationStatus(singleTeacher.id);
              setChangeSpecialization(!changeSpecialization);
            }}
            className="
            px-3
            py-1.5
            rounded-xl
            bg-[#F8F5F2]
            border
            border-[#E3D5CA]
            text-xs
            font-semibold
            text-[#4B403A]
            hover:bg-[#EEE5DD]
            transition-all
          "
          >
            Change
          </button>
        </div>
      </div>

      <div className="border-t border-[#ECE2DA]" />

      <div className="flex justify-between items-center ">
        <span className="text-[#7A6E66]">Salary Type</span>

        <div className="flex items-center gap-3">
          <span className="text-[#4B403A]">{singleTeacher.salaryType}</span>

          <button
            className="
            px-3
            py-1.5
            rounded-xl
            bg-[#F8F5F2]
            border
            border-[#E3D5CA]
            text-xs
            font-semibold
            text-[#4B403A]
            hover:bg-[#EEE5DD]
            transition-all
          "
          >
            Change
          </button>
        </div>
      </div>

      <div className="border-t border-[#ECE2DA]" />

      <div className="flex justify-between">
        <span className="text-[#7A6E66]">Assigned Classes</span>

        <span className="font-semibold text-[#4B403A]">5 Classes</span>
      </div>
      {/* modal */}
      <div>
        <input type="text" />
      </div>
    </div>
  );
}
