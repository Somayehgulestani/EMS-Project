import { useContext, useReducer } from "react";
import { RoleSelectContext } from "../../../context/RoleSelectContext";
import { useNavigate } from "react-router-dom";

const initialValue = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "fullName":
      return { ...state, fullName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    // }
    case "password":
      return { ...state, password: action.payload };
    case "confirmPassword":
      return { ...state, confirmPassword: action.payload };

    case "role":
      return { ...state, role: action.payload };
    default:
      return state;
  }
}

export default function Form({ setLoader, setErrorMessage }) {
  const { selectedRole } = useContext(RoleSelectContext);
  console.log(selectedRole);

  const [state, dispatch] = useReducer(reducer, initialValue);
  const { fullName, email, password, confirmPassword } = state;
  const navigate = useNavigate();

  const fetchData = async (e) => {
    e.preventDefault();

    if (fullName.trim().length < 3 || fullName.trim().length > 20) {
      setErrorMessage(
        "Fullname should not be less than 3 characters and more than 20 characters",
      );
      return;
    }
    if (email === "") {
      setErrorMessage("Email should not be empty");
      return;
    }
    if (password.trim().length < 6) {
      setErrorMessage("Password should not be less than 6 characters");
      return;
    }
    if (confirmPassword !== password) {
      setErrorMessage("confirm password is equal to password");
      return;
    }

    setLoader(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/send-verification-code",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            password,
            role: selectedRole,
          }),
        },
      );

      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.message);
        return;
      }

      console.log(data);
      navigate("/Confirmation", { state: { email } });
    } catch (error) {
      console.error("Error during sign-up:", error);
      setErrorMessage("Network error!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <form className="space-y-4" onSubmit={(e) => fetchData(e)}>
        {/* Full Name */}
        <div>
          <label className="block mb-2 text-[#5E524B] font-medium text-sm">
            Full Name
          </label>

          <input
            value={fullName}
            onChange={(e) =>
              dispatch({
                type: "fullName",
                payload: e.target.value,
              })
            }
            type="text"
            placeholder="Enter your full name"
            className="
                w-full
                px-3
                py-2
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-3
                focus:ring-[#D7BDB0]/40
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-[#5E524B] font-medium text-sm">
            Email
          </label>

          <input
            value={email}
            onChange={(e) =>
              dispatch({
                type: "email",
                payload: e.target.value,
              })
            }
            type="email"
            placeholder="Enter your email"
            className="
                w-full
                px-3
                py-2
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-3
                focus:ring-[#D7BDB0]/40
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-[#5E524B] font-medium text-sm">
            Password
          </label>

          <input
            value={password}
            onChange={(e) =>
              dispatch({ type: "password", payload: e.target.value })
            }
            type="password"
            placeholder="Create a password"
            className="
                w-full
                px-3
                py-2
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-3
                focus:ring-[#D7BDB0]/40
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-2 text-[#5E524B] font-medium text-sm">
            Confirm Password
          </label>

          <input
            value={confirmPassword}
            onChange={(e) =>
              dispatch({
                type: "confirmPassword",
                payload: e.target.value,
              })
            }
            type="password"
            placeholder="Confirm your password"
            className="
                w-full
                px-3
                py-2
                rounded-xl
                bg-[#F8F5F2]
                border border-[#E3D5CA]
                outline-none
                focus:ring-3
                focus:ring-[#D7BDB0]/40
                text-[#4B403A]
                placeholder:text-[#9B8F88]
                transition-all
                duration-300
              "
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          className="
              w-full
              py-3
              rounded-xl
              bg-[#D7BDB0]
              hover:bg-[#CDB1A3]
              text-[#4B403A]
              font-semibold
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-1
              mt-2
            "
        >
          Create Account
        </button>
      </form>
    </>
  );
}
