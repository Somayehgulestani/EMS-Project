import { useContext } from "react";
import { SingleTeacherContext } from "../../../context/singleTeacherContext";

export default function Information() {
  const { singleTeacher } = useContext(SingleTeacherContext);

  return (
    <div className="mt-10 space-y-3.5 text-sm">
      <div className="flex justify-between">
        <span className="text-[#7A6E66]">Teacher ID</span>

        <span className="font-medium text-[#4B403A]">
          {singleTeacher.instructorCode}
        </span>
      </div>

      <div className="border-t border-[#ECE2DA]" />

      <div className="flex justify-between">
        <span className="text-[#7A6E66]">Email</span>

        <span className="text-[#4B403A]">{singleTeacher.email}</span>
      </div>

      <div className="border-t border-[#ECE2DA]" />

      <div className="flex justify-between items-center">
        <span className="text-[#7A6E66]">Specialization</span>

        <div className="flex items-center gap-3">
          <span className="text-[#4B403A]">{singleTeacher.specialization}</span>

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

      <div className="flex justify-between items-center">
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
    </div>
  );
}
