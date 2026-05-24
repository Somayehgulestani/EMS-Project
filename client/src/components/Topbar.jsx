export default function Topbar({ children }) {
  return (
    <div
      className="
            bg-white/50
            backdrop-blur-xl
            border
            border-white/40
            rounded-[24px]
            px-4
            py-4
            shadow-md
            flex
            items-center
            justify-between
            gap-3
          "
    >
      {children}
    </div>
  );
}
