export default function Footer({ timer }) {
  return (
    <div className="text-center mt-5">
      <button
        className="
              text-xs
              font-medium
              text-[#6D625B]
              hover:text-[#4B403A]
              transition-colors
              duration-300
              p-2
              rounded-lg
              cursor-pointer
            "
        style={
          timer <= 0 ? { backgroundColor: "#D7BDB0" } : { backgroundColor: "" }
        }
      >
        Didn’t receive the code?
      </button>
    </div>
  );
}
