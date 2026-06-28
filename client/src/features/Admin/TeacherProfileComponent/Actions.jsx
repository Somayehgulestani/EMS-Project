export default function Actions() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-10 text-sm">
      <button
        className="
        h-10
        rounded-xl
        bg-[#D7BDB0]
        text-[#4B403A]
        font-semibold
        hover:bg-[#CDB1A3]
        transition-all
      "
      >
        Assign Classes
      </button>

      <button
        className="
        h-10
        rounded-xl
        bg-[#F8F5F2]
        border
        border-[#E3D5CA]
        text-[#4B403A]
        font-semibold
        hover:bg-[#EEE5DD]
        transition-all
      "
      >
        Disable Teacher
      </button>
    </div>
  );
}
