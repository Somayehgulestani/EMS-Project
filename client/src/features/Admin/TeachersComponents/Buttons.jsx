export default function Buttons() {
  return (
    <div className="flex items-center justify-center gap-3 m-8">
      {/* Previous */}

      <button
        className="
      flex
      items-center
      gap-2
      px-5
      py-2.5
      rounded-2xl
      bg-[#F8F5F2]
      border
      border-[#E3D5CA]
      text-[#4B403A]
      text-sm
      font-semibold
      hover:bg-[#EDEEE9]
      hover:shadow-md
      transition-all
      duration-300
    "
      >
        ← Previous
      </button>

      {/* Page Number */}
      <div
        className="
      px-4
      py-2.5
      rounded-2xl
      bg-white/60
      border
      border-[#E3D5CA]
      text-sm
      font-semibold
      text-[#4B403A]
    "
      >
        Page 1 of 11
      </div>

      {/* Next */}

      <button
        className="
      flex
      items-center
      gap-2
      px-5
      py-2.5
      rounded-2xl
      bg-[#D7BDB0]
      text-[#4B403A]
      text-sm
      font-semibold
      hover:bg-[#CDB1A3]
      hover:shadow-md
      transition-all
      duration-300
    "
      >
        Next →
      </button>
    </div>
  );
}
