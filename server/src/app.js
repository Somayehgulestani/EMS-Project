const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./modules/auth/auth.routes");
const studentRoutes = require("./modules/students/student.routes");
const courseRoutes = require("./modules/courses/course.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/courses", courseRoutes);

// routes
app.use("/api/v1/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("EMS API Running...");
});

module.exports = app;
