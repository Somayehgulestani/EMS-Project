const express = require("express");

const authController = require("./auth.controller");

const auth = require("../../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/admin-dashboard", auth("admin"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin",
    user: req.user,
  });
});

router.get("/instructor-dashboard", auth("instructor"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Instructor",
    user: req.user,
  });
});

router.get("/student-dashboard", auth("student"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Student",
    user: req.user,
  });
});

module.exports = router;
