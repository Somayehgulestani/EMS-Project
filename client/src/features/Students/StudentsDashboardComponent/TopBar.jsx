import Topbar from "../../../components/Topbar";

export default function TopBar() {
  return (
    <Topbar>
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#4B403A]">
          Welcome Back
        </h2>
        <p className="text-xs sm:text-sm text-[#7A6E66] mt-1">
          Here’s your learning overview
        </p>
      </div>

      <div
        className="
              w-10
              h-10
              rounded-2xl
              bg-[#D7BDB0]/40
              flex
              items-center
              justify-center
              text-lg
            "
      >
        🎓
      </div>
    </Topbar>
  );
}
