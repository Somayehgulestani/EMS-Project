export default function TableHeader() {
  return (
    <div
      className="
      hidden
      lg:grid
      grid-cols-[2.3fr_1.7fr_2.2fr_2fr_1.2fr_2fr_2fr]
      gap-6
      px-6
      py-5
      bg-[#F8F5F2]
      border-b
      border-[#E3D5CA]
      text-xs
      font-semibold
      uppercase
      tracking-wider
      text-[#7A6E66]
    "
    >
      <p>Student</p>

      <p>ID</p>

      <p>Email</p>
      <p>Phone</p>

      <p>Status</p>

      <p>Payment</p>

      <p className="text-right">Actions</p>
    </div>
  );
}
