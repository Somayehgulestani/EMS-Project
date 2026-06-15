const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../users/user.model");
const Verification = require("./verification.model");

const mailer = require("../../utils/sendEmail");

/*
 Generate Verification Code */
const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

/*
 Send Verification Code */
const sendVerificationCode = async (payload) => {
  const { fullName, email, password, role } = payload;

  /* Check Existing User */

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  /* Prevent Admin Registration */

  if (role === "admin") {
    throw new Error("Admin registration is not allowed");
  }

  /* Allow Only Valid Roles */

  if (!["student", "instructor"].includes(role)) {
    throw new Error("Invalid role");
  }

  /* Generate Verification Code */

  const code = generateVerificationCode();

  /* Remove Previous Verification */

  await Verification.deleteMany({ email });

  /* Save Verification Data */

  await Verification.create({
    fullName,
    email,
    password,
    role,
    code,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000),
  });

  /* Send Email */

  await mailer({
    to: email,
    subject: "EMS Verification Code",
    text: ` Your verification code is ${code}`,
  });

  return {
    email,
  };
};

/*
 Verify Email & Create User */
const verifyEmail = async (payload) => {
  const { email, code } = payload;

  /* Find Verification Record */

  const verificationData = await Verification.findOne({
    email,
    code,
  });

  if (!verificationData) {
    throw new Error("Invalid verification code");
  }

  /* Check Expiration */

  if (verificationData.expiresAt < new Date()) {
    throw new Error("Verification code expired");
  }

  /* Hash Password */

  const hashedPassword = await bcrypt.hash(verificationData.password, 10);

  /* Create User */

  const user = await User.create({
    fullName: verificationData.fullName,
    email: verificationData.email,
    password: hashedPassword,
    role: verificationData.role,
  });

  /* Delete Verification Record */

  await Verification.deleteMany({ email });

  /* Remove Password From Response */

  const userResponse = user.toObject();

  delete userResponse.password;

  return userResponse;
};

/*
 User Login
   (Student & Instructor) */
const loginUser = async (payload) => {
  const { email, password } = payload;

  /* Find User */

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid credentials");
  }

  /* Prevent Admin Login Here */

  if (user.role === "admin") {
    throw new Error("Please use admin login");
  }

  /* Compare Password */

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    throw new Error("Invalid credentials");
  }

  /* Generate Token */

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

  /* Remove Password */

  const userResponse = user.toObject();

  delete userResponse.password;

  return {
    token,
    user: userResponse,
  };
};

/*
 Admin Login */
const adminLoginUser = async (payload) => {
  const { email, password, adminSecret } = payload;

  /* Find User */

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new Error("Invalid admin credentials");
  }

  /* Check Admin Role */
  if (user.role !== "admin") {
    throw new Error("You are not allowed to access admin panel");
  }

  /* Compare Password */

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    throw new Error("Invalid admin credentials");
  }

  /* Check Admin Secret */

  if (adminSecret !== process.env.ADMIN_SECRET) {
    throw new Error("Invalid admin security key");
  }

  /* Generate Token */

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

  /* Remove Password */

  const userResponse = user.toObject();

  delete userResponse.password;

  return {
    token,
    user: userResponse,
  };
};

module.exports = {
  sendVerificationCode,
  verifyEmail,
  loginUser,
  adminLoginUser,
};
