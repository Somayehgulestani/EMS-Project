import Stats from "../../../components/Stats";
export default function StatS() {
  return (
    <Stats>
      {/* Card */}
      <div
        className="
              bg-white/50
              backdrop-blur-xl
              border
              border-white/40
              rounded-[22px]
              p-4
              shadow-md
            "
      >
        <p className="text-sm text-[#7A6E66]">My Classes</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">6</h3>
      </div>

      <div
        className="
              bg-white/50
              backdrop-blur-xl
              border
              border-white/40
              rounded-[22px]
              p-4
              shadow-md
            "
      >
        <p className="text-sm text-[#7A6E66]">Students</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">142</h3>
      </div>

      <div
        className="
              bg-white/50
              backdrop-blur-xl
              border
              border-white/40
              rounded-[22px]
              p-4
              shadow-md
            "
      >
        <p className="text-sm text-[#7A6E66]">Salary</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">$1,850</h3>
      </div>

      <div
        className="
              bg-white/50
              backdrop-blur-xl
              border
              border-white/40
              rounded-[22px]
              p-4
              shadow-md
            "
      >
        <p className="text-sm text-[#7A6E66]">Notifications</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">12</h3>
      </div>
    </Stats>
  );
}
