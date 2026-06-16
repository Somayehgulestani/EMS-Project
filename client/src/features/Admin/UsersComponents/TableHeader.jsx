export default function TableHeader() {
  return (
    <div
      className="
            hidden
            xl:grid
            grid-cols-7
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
