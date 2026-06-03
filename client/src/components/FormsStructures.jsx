export default function FormStructures({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] px-4 py-6">
      <div
        className="
          w-full
          max-w-sm
          bg-white/50
          backdrop-blur-xl
          border border-white/40
          shadow-xl
          rounded-[26px]
          p-5 sm:p-6
        "
      >
        {children}
      </div>
    </div>
  );
}
