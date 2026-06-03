import { useContext } from "react";
import { RoleSelectContext } from "../../../context/RoleSelectContext";
import { Link } from "react-router-dom";
const roles = [
  {
    title: "Teacher",
    description: "Handle classes, attendance and grading",
    role: "instructor",
    color: "#D7BDB0",
  },
  {
    title: "Student",
    description: "Access courses, assignments and results",
    role: "student",
    color: "#E3D5CA",
  },
];

export default function RoleCards() {
  const { setSelectedRole, selectedRole } = useContext(RoleSelectContext);
  console.log(selectedRole);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {roles.map((role) => (
        <div
          key={role.title}
          className="
                group
                rounded-[35px]
                p-5
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
          <Link to="/signup">
            <button
              onClick={() => setSelectedRole(role.role)}
              className="
                  mt-6
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
          </Link>
        </div>
      ))}
    </div>
  );
}
