const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../users/user.model");

const registerUser = async (payload) => {
  const { fullName, email, password, role } = payload;

  // check existing user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // prevent admin registration
  if (role === "admin") {
    throw new Error("Admin registration is not allowed");
  }

  // allow only valid roles
  if (!["student", "instructor"].includes(role)) {
    throw new Error("Invalid role");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create user
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
    role,
  });

  // remove password from response
  const userResponse = user.toObject();
  delete userResponse.password;

  return userResponse;
};

const loginUser = async (payload) => {
  const { email, password } = payload;

  // find user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // compare password
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    throw new Error("Invalid credentials");
  }

  // generate token
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  // remove password from response
  const userResponse = user.toObject();
  delete userResponse.password;

  return {
    token,
    user: userResponse,
  };
};

module.exports = {
  registerUser,
  loginUser,
};
