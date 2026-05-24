export default function Sidebar({ children }) {
  return (
    <div
      className="
          hidden
          md:flex
          w-[240px]
          flex-col
          bg-white/50
          backdrop-blur-xl
          border-r
          border-white/40
          shadow-lg
          px-4
          py-5
        "
    >
      {children}
    </div>
  );
}
