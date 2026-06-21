export default function Statistics({ meta }) {
  console.log(meta);

  const stats = [
    { label: "Users", value: meta.total },
    { label: "Active", value: meta.totalIsActive },
    { label: "Current Page", value: meta.page },
    { label: "Pages", value: meta.totalPages },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 mt-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="bg-white/40 backdrop-blur-md border border-white/30 rounded-xl px-3 py-2"
        >
          <p className="text-[11px] text-[#7A6E66] leading-none">
            {item.label}
          </p>

          <div className="text-lg font-semibold text-[#4B403A] leading-tight mt-1">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
