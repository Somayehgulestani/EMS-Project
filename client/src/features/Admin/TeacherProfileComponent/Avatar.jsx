import { useContext } from "react";
import { SingleTeacherContext } from "../../../context/singleTeacherContext";

export default function Avatar() {
  const { singleTeacher } = useContext(SingleTeacherContext);

  return (
    <div className="flex flex-col items-center">
      <div
        className="
        w-16
        h-14
        rounded-[20px]
        bg-[#D7BDB0]/35
        flex
        items-center
        justify-center
        text-2xl
        font-bold
        text-[#4B403A]
         uppercase
      "
      >
        {singleTeacher?.fullName?.charAt(0)}
      </div>

      <h2 className="mt-5 text-2xl font-bold text-[#4B403A]">
        {singleTeacher?.fullName?.charAt(0).toUpperCase()}
        {singleTeacher?.fullName?.slice(1)}
      </h2>

      <p className="mt-2 text-sm text-[#7A6E66]">
        {singleTeacher?.specialization}
      </p>
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
            mt-3
          "
          style={{
            backgroundColor: singleTeacher.isActive ? "#82e1a5" : "#e06969",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: singleTeacher.isActive ? "#1aaa4f" : "#b92c2c",
            }}
          ></span>
          {singleTeacher.isActive ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
}
