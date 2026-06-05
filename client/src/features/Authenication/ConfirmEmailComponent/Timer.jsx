import { useEffect } from "react";
export default function Timer({ timer, setTimer }) {
  useEffect(() => {
    const Timer = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(Timer);
  }, []);

  return (
    <div className="text-center mt-4">
      {timer <= 0 ? (
        <p className="text-xs font-medium text-[#7A6E66]">code expired</p>
      ) : (
        <p className="text-xs text-[#7A6E66]">
          Resend code in{" "}
          <span className="font-semibold text-[#4B403A]">
            00:
            {timer}
          </span>
        </p>
      )}
    </div>
  );
}
