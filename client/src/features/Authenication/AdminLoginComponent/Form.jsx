import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialValue = { email: "", password: "", adminSecret: "" };
function reducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "adminSecret":
      return { ...state, adminSecret: action.payload };
    default:
      return state;
  }
}
export default function Form({
  setSuccessMessage,
  setLoader,
  setErrorMessage,
}) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { email, password, adminSecret } = state;
  const navigate = useNavigate();

  async function response(e) {
    e.preventDefault();
    setSuccessMessage("");
    setLoader(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/admin-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            adminSecret: adminSecret,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message);
        setSuccessMessage("");

        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      } else {
        setErrorMessage("");
        setSuccessMessage(data.message);
      }

      sessionStorage.setItem("Token", data.data.token);

      navigate("/AdminDashboard");

      console.log(data);
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Network Error");
    } finally {
      setLoader(false);
    }
  }
  return (
    <form
      className="mt-6 space-y-4 relative z-10"
      onSubmit={(e) => response(e)}
    >
      {/* Email */}
      <div>
        <label className="block mb-2 text-sm font-medium text-[#5E524B]">
          Admin Email
        </label>

        <input
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
          value={email}
          type="email"
          placeholder="Enter admin email"
          className="
                w-full
                px-4
                py-3
                rounded-2xl
                bg-[#F8F5F2]
                border
                border-[#E3D5CA]
                text-sm
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/30
                focus:border-[#D7BDB0]
                transition-all
              "
        />
      </div>

      {/* Password */}
      <div>
        <label className="block mb-2 text-sm font-medium text-[#5E524B]">
          Password
        </label>

        <input
          onChange={(e) =>
            dispatch({ type: "password", payload: e.target.value })
          }
          value={password}
          type="password"
          placeholder="Enter password"
          className="
                w-full
                px-4
                py-3
                rounded-2xl
                bg-[#F8F5F2]
                border
                border-[#E3D5CA]
                text-sm
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/30
                focus:border-[#D7BDB0]
                transition-all
              "
        />
      </div>

      {/* Security Code */}
      <div>
        <label className="block mb-2 text-sm font-medium text-[#5E524B]">
          Security Code
        </label>

        <input
          onChange={(e) =>
            dispatch({ type: "adminSecret", payload: e.target.value })
          }
          value={adminSecret}
          placeholder="Enter security code"
          className="
                w-full
                px-4
                py-3
                rounded-2xl
                bg-[#F8F5F2]
                border
                border-[#E3D5CA]
                text-sm
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                outline-none
                focus:ring-4
                focus:ring-[#D7BDB0]/30
                focus:border-[#D7BDB0]
                transition-all
              "
        />
      </div>
      {/* Remember + Forgot */}
      {/* <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 text-xs text-[#7A6E66] cursor-pointer">
              <input type="checkbox" className="accent-[#D7BDB0] w-4 h-4" />
              Remember session
            </label>

            <button
              type="button"
              className="
                text-xs
                text-[#7A6E66]
                hover:text-[#4B403A]
                transition-colors
              "
            >
              Forgot Password?
            </button>
          </div> */}

      {/* Submit */}
      <button
        type="submit"
        className="
              w-full
              py-3
              mt-2
              rounded-2xl
              bg-[#D7BDB0]
              hover:bg-[#CDB1A3]
              text-[#4B403A]
              font-semibold
              text-sm
              shadow-lg
              hover:shadow-xl
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
      >
        Access Admin Panel
      </button>
    </form>
  );
}
