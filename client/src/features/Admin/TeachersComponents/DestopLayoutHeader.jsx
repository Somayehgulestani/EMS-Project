export default function DestopLayoutHeader() {
  return (
    <div
      className="
      grid
      grid-cols-[2.3fr_1.3fr_2fr_1.4fr_1.2fr_1fr_1fr_2fr]
      items-center
      gap-5
      px-6
      py-5
      bg-[#F8F5F2]
      border-b
      border-[#E3D5CA]
      text-xs
      uppercase
      tracking-wider
      font-semibold
      text-[#7A6E66]
    "
    >
      <p>Teacher</p>
      <p>ID</p>
      <p>Email</p>
      <p>Specialization</p>
      <p>Salary</p>
      <p>Classes</p>
      <p>Status</p>
      <p className="text-right">Actions</p>
    </div>
  );
}
