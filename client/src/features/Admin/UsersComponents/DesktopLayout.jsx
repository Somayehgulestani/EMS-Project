export default function DesktopLayout({ user }) {
  return (
    <div className="grid grid-cols-[1.8fr_3fr_3.2fr_1.5fr_1.3fr_1.5fr_2.5fr] gap-4 items-center">
      {/* User */}
      <div className="flex items-center gap-3">
        <div>
          <p className="text-sm font-semibold text-[#4B403A]">
            {user.fullName}
          </p>

          <p className="text-xs text-[#7A6E66]">
            {" "}
            {user.isActive ? "Active" : "InActive"}
          </p>
        </div>
      </div>

      {/* ID */}
      <div>
        <p className="text-sm font-medium text-[#4B403A] ">{user._id}</p>
      </div>

      {/* Email */}
      <p className="text-sm text-[#6D625B] break-all truncate ">{user.email}</p>

      {/* Role */}
      <div>
        <span
          className="
      px-3
      py-1.5
      rounded-xl
      bg-[#F8F5F2]
      border
      border-[#E3D5CA]
      text-xs
      font-medium
      text-[#4B403A]
    "
        >
          {user.role}
        </span>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-full bg-green-500"
          style={{ backgroundColor: user.isActive ? "#22c55e" : "#ef4444" }}
        ></span>

        <span className="text-sm text-[#4B403A]">
          {user.isActive ? "Active" : "InActive"}
        </span>
      </div>

      {/* Date */}
      <div>
        <p className="text-xs font-medium text-[#4B403A]">
          {user.createdAt?.slice(0, 10)}
        </p>

        <p className="text-xs text-[#7A6E66] mt-1">
          {user.createdAt?.slice(11, 19)}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        <button
          className="
      px-4
      py-2
      rounded-xl
      bg-[#EDEEE9]
      border
      border-[#D6CCC2]
      text-[#4B403A]
      text-xs
      font-semibold
      hover:bg-[#F8F5F2]
      transition-all
    "
        >
          Add To Panel
        </button>

        <button
          className="
      px-4
      py-2
      rounded-xl
      bg-[#D7BDB0]
      hover:bg-[#CDB1A3]
      text-[#4B403A]
      text-xs
      font-semibold
      transition-all
    "
        >
          Disable
        </button>
      </div>
    </div>
  );
}
