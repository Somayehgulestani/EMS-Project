export default function TableHeader() {
  return (
    <div
      className="
            hidden
            lg:grid
            grid-cols-[1.8fr_3fr_3.2fr_1.5fr_1.3fr_1.5fr_2.5fr]
            gap-4
            px-6
            py-4
            bg-[#F8F5F2]
            border-b
            border-[#E3D5CA]
          "
    >
      <p className="text-sm font-semibold text-[#4B403A]">Full Name</p>
      <p className="text-sm font-semibold text-[#4B403A]">User ID</p>
      <p className="text-sm font-semibold text-[#4B403A]">Email</p>
      <p className="text-sm font-semibold text-[#4B403A]">Role</p>
      <p className="text-sm font-semibold text-[#4B403A]">Status</p>
      <p className="text-sm font-semibold text-[#4B403A]">Registered</p>
      <p className="text-sm font-semibold text-right text-[#4B403A]">Actions</p>
    </div>
  );
}
