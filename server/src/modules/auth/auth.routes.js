const express = require("express");

const authController = require("./auth.controller");

const auth = require("../../middlewares/auth.middleware");

const validateRequest = require("../../middlewares/validate.middlewares");

const {
  sendVerificationCodeValidation,
  verifyEmailValidation,
  loginValidation,
} = require("./auth.validation");

const router = express.Router();

/*
Send Verification Code
*/

router.post(
  "/send-verification-code",
  validateRequest(sendVerificationCodeValidation),
  authController.sendVerificationCode,
);

/*
 Verify Email & Create Account
*/

router.post(
  "/verify-email",
  validateRequest(verifyEmailValidation),
  authController.verifyEmail,
);

/*
 Login
*/

router.post("/login", validateRequest(loginValidation), authController.login);

/*
 Admin Dashboard
*/

router.get("/admin-dashboard", auth("admin"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin",
    user: req.user,
  });
});

/*
 Instructor Dashboard
*/

router.get("/instructor-dashboard", auth("instructor"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Instructor",
    user: req.user,
  });
});

/*
 Student Dashboard
*/

router.get("/student-dashboard", auth("student"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Student",
    user: req.user,
  });
});

module.exports = router;
