import Stats from "../../../components/Stats";
export default function StatS() {
  return (
    <Stats>
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
        <p className="text-sm text-[#7A6E66]">Total Students</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">1,245</h3>
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
        <p className="text-sm text-[#7A6E66]">Teachers</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">48</h3>
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
        <p className="text-sm text-[#7A6E66]">Active Classes</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">32</h3>
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
        <p className="text-sm text-[#7A6E66]">Revenue</p>

        <h3 className="text-3xl font-bold text-[#4B403A] mt-2">$12.5K</h3>
      </div>
    </Stats>
  );
}
