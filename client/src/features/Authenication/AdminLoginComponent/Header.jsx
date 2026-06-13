export default function Header() {
  return (
    <>
      <div className="flex justify-center relative z-10">
        <div
          className="
              w-16
              h-16
              rounded-2xl
              bg-[#D7BDB0]/40
              border
              border-white/40
              flex
              items-center
              justify-center
              shadow-md
            "
        >
          <span className="text-2xl">🛡️</span>
        </div>
      </div>

      <div className="text-center mt-5 relative z-10">
        <h1 className="text-2xl font-bold text-[#4B403A]">Admin Access</h1>

        <p className="text-sm text-[#7A6E66] mt-2 leading-relaxed">
          Sign in securely to access the administration dashboard
        </p>
      </div>
    </>
  );
}
