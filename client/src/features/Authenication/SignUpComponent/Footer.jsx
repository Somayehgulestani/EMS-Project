import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <p className="text-center text-xs text-[#7A6E66] mt-6">
      Already have an account?{" "}
      <Link to="/Login">
        <span className="font-semibold text-[#4B403A] cursor-pointer hover:underline">
          Sign In
        </span>
      </Link>
    </p>
  );
}
