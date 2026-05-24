export default function ContactAdmin() {
  return (
    <div
      className="
    bg-white/50
    backdrop-blur-xl
    border
    border-white/40
    rounded-[24px]
    p-4
    shadow-md
  "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-[#4B403A]">
          Contact Admin
        </h3>

        <div
          className="
        w-8
        h-8
        rounded-xl
        bg-[#D7BDB0]/40
        flex
        items-center
        justify-center
      "
        >
          💬
        </div>
      </div>

      <p className="text-[11px] text-[#7A6E66] mt-1.5 leading-relaxed">
        Send requests or report issues directly to the admin.
      </p>

      {/* Message Input */}
      <div className="mt-4">
        <textarea
          placeholder="Write your message..."
          className="
        w-full
        h-20
        resize-none
        rounded-2xl
        bg-[#F8F5F2]
        border
        border-[#E3D5CA]
        px-3
        py-2.5
        text-sm
        text-[#4B403A]
        placeholder:text-[#9B8F88]
        outline-none
        focus:ring-4
        focus:ring-[#D7BDB0]/30
        transition-all
      "
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 mt-3">
        <button
          className="
        flex-1
        py-2
        rounded-xl
        bg-[#D7BDB0]
        hover:bg-[#CDB1A3]
        text-[#4B403A]
        text-sm
        font-semibold
        shadow-sm
        transition-all
      "
        >
          Send
        </button>

        <button
          className="
        px-3
        py-2
        rounded-xl
        border
        border-[#D7BDB0]
        text-[#6D625B]
        text-xs
        font-medium
        hover:bg-[#F8F5F2]
        transition-all
      "
        >
          History
        </button>
      </div>

      {/* Status */}
      <div
        className="
      mt-4
      flex
      items-center
      justify-between
      bg-[#F8F5F2]
      border
      border-[#E3D5CA]
      rounded-2xl
      px-3
      py-2.5
    "
      >
        <div>
          <p className="text-xs font-medium text-[#4B403A]">Admin Support</p>

          <p className="text-[11px] text-[#7A6E66] mt-0.5">
            Usually replies within 1 hour
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>

          <span className="text-[11px] font-medium text-[#4B403A]">Online</span>
        </div>
      </div>
    </div>
  );
}
