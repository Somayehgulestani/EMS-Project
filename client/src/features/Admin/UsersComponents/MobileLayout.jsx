export default function MobileLayout({ user }) {
  return (
    <div>
      <div
        className="
    bg-[#F8F5F2]
    border
    border-[#E3D5CA]
    rounded-3xl
    p-4
    space-y-4
  "
      >
        {/* Top */}
        <div className="flex items-center gap-3">
          <div
            className="
        w-12
        h-12
        rounded-2xl
        bg-[#D7BDB0]/35
        flex
        items-center
        justify-center
        text-[#4B403A]
        font-bold
      "
          >
            {user.fullName.charAt(0)}
          </div>

          <div>
            <p className="text-sm font-semibold text-[#4B403A]">
              {user?.fullName?.charAt(0).toUpperCase()}
              {user?.fullName?.slice(1)}
            </p>

            <p className="text-xs text-[#7A6E66] mt-1">{user.email}</p>
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-[#7A6E66]">User ID</p>
            <p className="text-sm font-medium text-[#4B403A] mt-1">
              {user._id}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#7A6E66]">Role</p>

            <p className="text-sm font-medium text-[#4B403A] mt-1">
              {user.role}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#7A6E66]">Status</p>

            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>

              <p className="text-sm font-medium text-[#4B403A]">
                {user.isActive ? "Active" : "InActive"}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs text-[#7A6E66]">Registered</p>

            <p className="text-sm font-medium text-[#4B403A] mt-1">
              {user.createdAt?.slice(0, 10)}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 pt-1">
          <button
            className="
        w-full
        py-2.5
        rounded-2xl
        bg-[#EDEEE9]
        border
        border-[#D6CCC2]
        text-[#4B403A]
        text-sm
        font-semibold
      "
          >
            Add To Panel
          </button>

          <button
            className="
        w-full
        py-2.5
        rounded-2xl
        bg-[#D7BDB0]
        text-[#4B403A]
        text-sm
        font-semibold
      "
          >
            Disable
          </button>
        </div>
      </div>
    </div>
  );
}
