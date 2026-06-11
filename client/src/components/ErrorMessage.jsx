import { useEffect, useState } from "react";

export default function ErrorMessage({ ErrorMessage }) {
  const [time, setTime] = useState(true);
  console.log(ErrorMessage);

  useEffect(() => {
    if (!ErrorMessage) return;
    const timer = setTimeout(() => {
      setTime(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [ErrorMessage]);
  return (
    time && (
      <div
        className="
        absolute
        top-5
        right-4
        z-50

        w-[90%]
        max-w-[340px]

        flex
        items-start
        gap-3

        rounded-2xl
        border-2
        border-[#da6b6b]/70

        bg-[#FFF3F3]/95
        backdrop-blur-xl

        px-4
        py-3

        shadow-[0_12px_30px_rgba(180,80,80,0.14)]

        animate-[toastSlide_.55s_cubic-bezier(0.22,1,0.36,1)]
      "
      >
        {/* Error Icon */}
        <div
          className="
          min-w-[34px]
          h-[34px]

          rounded-xl

          bg-[#F3C7C7]

          flex
          items-center
          justify-center

          shadow-sm
        "
        >
          <span className="text-[#9e2e2e] text-sm font-bold">!</span>
        </div>

        {/* Message */}
        <div className="flex-1">
          <p
            className="
            text-sm
            font-semibold
            text-[#8b4343]
          "
          >
            Error
          </p>

          <p
            className="
            text-xs
            text-[#9f4b4b]
            mt-1
            leading-relaxed
          "
          >
            {ErrorMessage}
          </p>
        </div>
      </div>
    )
  );
}
