export default function OTP() {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <input
          key={item}
          type="text"
          maxLength="1"
          className="
                w-10
                h-12
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                text-center
                text-lg
                font-semibold
                text-[#4B403A]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/40
                focus:border-[#D7BDB0]
                transition-all
                duration-300
              "
        />
      ))}
    </div>
  );
}
