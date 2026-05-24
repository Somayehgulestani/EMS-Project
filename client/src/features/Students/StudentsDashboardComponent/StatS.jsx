import Stats from "../../../components/Stats";

export default function StatS() {
  return (
    <Stats className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-5">
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

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">5</h3>
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
        <p className="text-sm text-[#7A6E66]">Average Grade</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">92%</h3>
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
        <p className="text-sm text-[#7A6E66]">Assignments</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">14</h3>
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

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">8</h3>
      </div>
    </Stats>
  );
}
