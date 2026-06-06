export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F5EBE1] to-[#EDEEE9] px-4">
      {/* Loader Card */}
      <p className="text-[#5E524B] font-medium text-lg">Loading...</p>
      <div
        className="
          relative
          w-[140px]
          h-[140px]
          flex
          items-center
          justify-center
        "
      >
        {/* Outer Glow */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-[#D7BDB0]/30
            blur-2xl
            animate-pulse
          "
        ></div>

        {/* Rotating Ring */}
        <div
          className="
            absolute
            w-[100px]
            h-[100px]
            rounded-full
            border-[10px]
            border-[#E3D5CA]
            border-t-[#D7BDB0]
            border-r-[#d1beac]
            
            animate-spin
            shadow-xl
          "
        ></div>

        {/* Inner Circle */}
        <div
          className="
            w-[62px]
            h-[62px]
            rounded-full
            bg-white/60
            backdrop-blur-xl
            border
            border-white/50
            flex
            items-center
            justify-center
            shadow-2xl
          "
        >
          {/* Center Dot */}
          <div
            className="
              w-4
              h-4
              rounded-full
              bg-[#D7BDB0]
              animate-pulse
            "
          ></div>
        </div>
      </div>
    </div>
  );
}
