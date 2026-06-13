import { Link } from "react-router-dom";

export default function AdminAccess() {
  return (
    <Link to="/AdminForm">
      <div
        className="
    absolute
    top-5
    right-5
    z-40
  "
      >
        <button
          className="
      group
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-[#E3D5CA]
      bg-white/70
      backdrop-blur-xl
      px-4
      py-3
      shadow-[0_10px_25px_rgba(0,0,0,0.06)]
      hover:shadow-[0_14px_35px_rgba(0,0,0,0.10)]
      hover:-translate-y-0.5
      transition-all
      duration-300
    "
        >
          {/* Icon */}
          <div
            className="
        w-11
        h-11
        rounded-2xl
        bg-[#D7BDB0]/35
        flex
        items-center
        justify-center
        shadow-sm
      "
          >
            <span className="text-lg">🛡️</span>
          </div>

          {/* Text */}
          <div className="text-left">
            <p
              className="
          text-[11px]
          font-medium
          uppercase
          tracking-[1px]

          text-[#9B8F88]
        "
            >
              Restricted
            </p>

            <p
              className="
          text-sm
          font-semibold

          text-[#4B403A]

          group-hover:text-[#2F2723]

          transition-colors
        "
            >
              Admin Access
            </p>
          </div>
        </button>
      </div>
    </Link>
  );
}
