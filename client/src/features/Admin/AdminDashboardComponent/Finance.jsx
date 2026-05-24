export default function Finance() {
  return (
    <div
      className="
                bg-white/50
                backdrop-blur-xl
                border
                border-white/40
                rounded-[24px]
                p-5
                shadow-md
              "
    >
      <h3 className="text-lg font-semibold text-[#4B403A]">Finance</h3>

      <div
        className="
                  mt-5
                  bg-[#F8F5F2]
                  border
                  border-[#E3D5CA]
                  rounded-2xl
                  p-4
                "
      >
        <p className="text-sm text-[#7A6E66]">Monthly Revenue</p>

        <h2 className="text-3xl font-bold text-[#4B403A] mt-2">$12,540</h2>

        <div className="w-full h-2.5 bg-[#E3D5CA] rounded-full mt-4 overflow-hidden">
          <div className="w-[70%] h-full bg-[#D7BDB0] rounded-full" />
        </div>
      </div>
    </div>
  );
}
