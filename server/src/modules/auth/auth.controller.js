const authService = require("./auth.service");

const catchAsync = require("../../utils/catchAsync");

/*
   Send Verification Code */

const sendVerificationCode = catchAsync(async (req, res) => {
  const result = await authService.sendVerificationCode(req.body);

  res.status(200).json({
    success: true,
    message: "Verification code sent successfully",
    data: result,
  });
});

/*
   Verify Email & Create Account */

const verifyEmail = catchAsync(async (req, res) => {
  const result = await authService.verifyEmail(req.body);

  res.status(201).json({
    success: true,
    message: "Account created successfully",
    data: result,
  });
});

/*
   Student & Instructor Login */

const login = catchAsync(async (req, res) => {
  const result = await authService.loginUser(req.body);

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: result,
  });
});

/*
   Admin Login */

const adminLogin = catchAsync(async (req, res) => {
  const result = await authService.adminLoginUser(req.body);

  res.status(200).json({
    success: true,
    message: "Admin login successful",
    data: result,
  });
});

module.exports = {
  sendVerificationCode,
  verifyEmail,
  login,
  adminLogin,
};
