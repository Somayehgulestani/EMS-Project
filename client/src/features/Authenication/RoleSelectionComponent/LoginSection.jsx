import { Link } from "react-router-dom";
export default function LoginSection() {
  return (
    <div className="mt-14 flex flex-col items-center">
      <p className="text-[#7A6E66] mb-5 text-sm md:text-base">
        Already selected a role?
      </p>
      <button
        className="
          relative
          overflow-hidden
          px-8
          py-3
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
        <Link to="/Login">
          <span className="relative z-10 flex items-center gap-2">
            Sign In To Your Account
          </span>
        </Link>
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
  );
}
